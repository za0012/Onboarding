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
        <div className="flex h-screen bg-fefae0 items-center justify-center p-8 mainBox">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-300">
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <input
                        type="text"
                        value={userData.id}
                        onChange={(e) => {
                            setUserData({ ...userData, id: e.target.value });
                        }}
                        placeholder="ID"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
                    >
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
