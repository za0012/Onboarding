import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { UserDataLog } from '../types/Sign';
import userStore from '../store/store';

import '../css/Home.css';

const Login = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserDataLog>({
        id: '',
        password: '',
    });
    const { logInUser } = userStore((state) => state);

    // mutation
    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            if (data.success) {
                alert('로그인 성공🥕🥕');
                navigate('/');
                queryClient.invalidateQueries({ queryKey: ['user'] }); // user 관련 쿼리 무효화
                logInUser(data);
            } else {
                alert('로그인 실패💦');
                setUserData({
                    id: '',
                    password: '',
                });
            }
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
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
