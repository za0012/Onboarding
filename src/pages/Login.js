import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { login } from '../api/auth.js';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/store.js';
import '../css/Home.css';
const Login = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
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
            }
            else {
                alert('로그인 실패💦');
                setUserData({
                    id: '',
                    password: '',
                });
            }
        },
    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutate(userData);
    };
    return (_jsx("div", { className: "centerBox mainBox", children: _jsx("div", { className: "formBox", children: _jsxs("form", { onSubmit: onSubmitHandler, className: "space-y-4", children: [_jsx("input", { type: "text", value: userData.id, onChange: (e) => {
                            setUserData(Object.assign(Object.assign({}, userData), { id: e.target.value }));
                        }, placeholder: "ID", className: "inputBox", required: true }), _jsx("input", { type: "password", value: userData.password, onChange: (e) => {
                            setUserData(Object.assign(Object.assign({}, userData), { password: e.target.value }));
                        }, placeholder: "PW", className: "inputBox", required: true }), _jsx("button", { type: "submit", className: "formButton", children: "\uB85C\uADF8\uC778" })] }) }) }));
};
export default Login;
