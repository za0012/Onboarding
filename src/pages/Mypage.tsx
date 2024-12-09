import { useState, useCallback } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserProfile, updateProfile } from '../api/auth.js';
import userStore from '../store/store.js';
import Modal from '../components/Modal.js';
import '../css/Home.css';

const Mypage = () => {
    const { user } = userStore((state) => state);
    const [nickname, setNickname] = useState('');
    const [imgFile, setImgFile] = useState<File | null>(null);

    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    //mutation이 아닌 query를 사용하는 이유는
    const { data, isLoading, isError } = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile(user.accessToken),
    });

    const { mutate } = useMutation({
        mutationFn: (formData: FormData) => {
            return updateProfile(formData, user.accessToken);
        },
        onSuccess: (data) => {
            if (data.success) {
                alert('프로필 업데이트 완료!🥕🥕');
            } else {
                alert('프로필 업데이트 실패💦');
                setNickname('');
                setImgFile(null);
            }
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        // avatar와 nickname 중 하나 또는 모두 변경 가능
        if (imgFile) formData.append('avatar', imgFile);
        if (nickname) formData.append('nickname', nickname); //왜 if? 데이터가 존재한다면 변경해줘야 하기 때문이다.
        mutate(formData);
        location.reload();
    };

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }

    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }

    return (
        <div className="centerBox mainBox">
            <div className="formBox">
                <p className="formTitle">mypage</p>
                <p className="formText">아이디 : {data?.id}</p>
                <p className="formText mb-4">닉네임 : {data?.nickname}</p>
                <img src={`${data?.avatar}`} />
                <button
                    className="formButton mt-4"
                    onClick={onClickToggleModal}
                >
                    프로필 변경
                </button>
            </div>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
                        <h2 className="text-2xl font-bold mb-6 mt-4">
                            프로필 변경
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="avatar"
                                    className="block font-medium mb-2"
                                >
                                    프로필 사진
                                </label>
                                <div className="mt-4">
                                    <img
                                        src={
                                            imgFile
                                                ? URL.createObjectURL(imgFile)
                                                : data?.avatar || ''
                                        }
                                        alt="Avatar Preview"
                                        className="mypageImg"
                                    />
                                </div>
                                <input
                                    type="file"
                                    id="avatar"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setImgFile(
                                            e.target.files
                                                ? e.target.files[0]
                                                : null
                                        )
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nickname"
                                    className="block font-medium mb-2"
                                >
                                    닉네임
                                </label>
                                <input
                                    type="text"
                                    id="nickname"
                                    value={nickname}
                                    onChange={(e) =>
                                        setNickname(e.target.value)
                                    }
                                    placeholder="새 닉네임 입력"
                                    className="inputBox"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="formButton"
                            >
                                {isLoading ? '업데이트 중...' : '업데이트'}
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Mypage;
