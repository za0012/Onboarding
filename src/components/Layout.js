import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useUserStore from '../store/store.js';
const Layout = () => {
    const navigate = useNavigate();
    const { user, logOutUser } = useUserStore((state) => state);
    useEffect(() => {
        if (!user.success) {
            navigate('/');
        }
    }, [user.success]);
    const handleLogout = () => {
        logOutUser();
        alert('로그아웃 되었습니다.');
        return _jsx(Navigate, { to: "/" });
    };
    return (_jsx("div", { children: _jsx("header", { className: "fixed z-[30] w-[100%] h-[60px] box-border py-[5px] pl-[50px] pr-[100px] text-white", children: _jsxs("nav", { className: "flex flex-row justify-between text-[16px] min-w-[800px] items-center", children: [_jsx(Link, { to: "/", children: _jsx("p", { children: "\uD638\uD638\uD638\uD638\uD648" }) }), user.success ? (_jsxs("div", { className: "flex gap-[16px]", children: [_jsx(Link, { to: "/Mypage", children: "\uB9C8\uC774\uD398\uC774\uC9C0" }), _jsx("span", { children: "|" }), _jsx("button", { onClick: handleLogout, children: "\uB85C\uADF8\uC544\uC6C3" })] })) : (_jsxs("div", { className: "flex gap-[16px]", children: [_jsx(Link, { to: "/signup", children: "\uD68C\uC6D0\uAC00\uC785" }), _jsx(Link, { to: "/login", children: "\uB85C\uADF8\uC778" })] }))] }) }) }));
};
export default Layout;
