import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { register } from '../api/auth.js';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
const Signup = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
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
            }
            else {
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
    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutate(userData);
    };
    return (_jsx("div", { className: "centerBox mainBox", children: _jsx("div", { className: "formBox", children: _jsxs("form", { onSubmit: onSubmitHandler, className: "space-y-4", children: [_jsx("input", { type: "text", value: userData.id, onChange: (e) => {
                            setUserData(Object.assign(Object.assign({}, userData), { id: e.target.value }));
                        }, placeholder: "ID", className: "inputBox", required: true }), _jsx("input", { type: "password", value: userData.password, onChange: (e) => {
                            setUserData(Object.assign(Object.assign({}, userData), { password: e.target.value }));
                        }, placeholder: "PW", className: "inputBox", required: true }), _jsx("input", { type: "text", value: userData.nickname, onChange: (e) => {
                            setUserData(Object.assign(Object.assign({}, userData), { nickname: e.target.value }));
                        }, placeholder: "NickName", className: "inputBox", required: true }), _jsx("button", { type: "submit", className: "formButton", children: "\uD68C\uC6D0\uAC00\uC785" })] }) }) }));
};
export default Signup;
