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
                    <button type="submit" className="formButton">
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
