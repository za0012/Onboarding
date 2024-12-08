import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../types/Sign';
import '../css/Home.css';

const Signup = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData>({
        id: '',
        password: '',
        nickname: '',
    });

    // mutation
    const { mutate } = useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            if (data.success) {
                alert(data.message);
                navigate('/');
                queryClient.invalidateQueries({ queryKey: ['user'] }); // user 관련 쿼리 무효화
            } else {
                alert(data.message);
                setUserData({
                    id: '',
                    password: '',
                    nickname: '',
                });
            }
        },
        onError: (error) => {
            console.error('Signup error', error);
            alert('회원가입에 실패했습니다.');
        },
    });

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(userData);
    };

    return (
        <div className="centerBox mainBox">
            <div className="formBox">
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <input
                        type="text"
                        value={userData.id}
                        onChange={(e) => {
                            setUserData({ ...userData, id: e.target.value });
                        }}
                        placeholder="ID"
                        className="inputBox"
                        required
                    />
                    <input
                        type="password"
                        value={userData.password}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            });
                        }}
                        placeholder="PW"
                        className="inputBox"
                        required
                    />
                    <input
                        type="text"
                        value={userData.nickname}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                nickname: e.target.value,
                            });
                        }}
                        placeholder="NickName"
                        className="inputBox"
                        required
                    />
                    <button type="submit" className="formButton">
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
