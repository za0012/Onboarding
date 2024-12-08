import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserProfile, updateProfile } from '../api/auth.js';
import userStore from '../store/store.js';
import Modal from '../components/Modal.js';
import '../css/Home.css';
const Mypage = () => {
    const { user } = userStore((state) => state);
    const [nickname, setNickname] = useState('');
    const [imgFile, setImgFile] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);
    //mutation이 아닌 query를 사용하는 이유는
    const { data, isLoading, isError } = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile(user.accessToken),
    });
    const { mutate } = useMutation({
        mutationFn: (formData) => {
            return updateProfile(formData, user.accessToken);
        },
        onSuccess: (data) => {
            if (data.success) {
                alert('프로필 업데이트 완료!🥕🥕');
            }
            else {
                alert('프로필 업데이트 실패💦');
                setNickname('');
                setImgFile(null);
            }
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // avatar와 nickname 중 하나 또는 모두 변경 가능
        if (imgFile)
            formData.append('avatar', imgFile);
        if (nickname)
            formData.append('nickname', nickname); //왜 if? 데이터가 존재한다면 변경해줘야 하기 때문이다.
        mutate(formData);
    };
    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);
    if (isLoading) {
        return _jsx("div", { children: "\uB85C\uB529 \uC911\uC785\uB2C8\uB2E4..." });
    }
    if (isError) {
        return _jsx("div", { children: "\uB370\uC774\uD130 \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4..." });
    }
    return (_jsxs("div", { className: "centerBox mainBox", children: [_jsxs("div", { className: "formBox", children: [_jsx("p", { children: "mypage" }), _jsx("p", { children: data === null || data === void 0 ? void 0 : data.id }), _jsx("p", { children: data === null || data === void 0 ? void 0 : data.nickname }), _jsx("img", { src: `${data === null || data === void 0 ? void 0 : data.avatar}` })] }), isOpenModal && (_jsx(Modal, { onClickToggleModal: onClickToggleModal, children: _jsxs("div", { className: "p-8 bg-white rounded shadow-md max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "\uD504\uB85C\uD544 \uBCC0\uACBD" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "avatar", className: "block font-medium mb-2", children: "\uD504\uB85C\uD544 \uC0AC\uC9C4" }), _jsx("div", { className: "mt-4", children: _jsx("img", { src: imgFile
                                                    ? URL.createObjectURL(imgFile)
                                                    : (data === null || data === void 0 ? void 0 : data.avatar) || '', alt: "Avatar Preview", className: "mypageImg" }) }), _jsx("input", { type: "file", id: "avatar", accept: "image/*", onChange: (e) => setImgFile(e.target.files
                                                ? e.target.files[0]
                                                : null), className: "w-full p-2 border border-gray-300 rounded" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "nickname", className: "block font-medium mb-2", children: "\uB2C9\uB124\uC784" }), _jsx("input", { type: "text", id: "nickname", value: nickname, onChange: (e) => setNickname(e.target.value), placeholder: "\uC0C8 \uB2C9\uB124\uC784 \uC785\uB825", className: "inputBox" })] }), _jsx("button", { type: "submit", disabled: isLoading, className: "formButton", children: isLoading ? '업데이트 중...' : '업데이트' })] })] }) })), _jsx("button", { onClick: onClickToggleModal, children: "Open Modal" })] }));
};
export default Mypage;
