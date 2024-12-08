import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
import Signup from '../pages/Signup.js';
import Login from '../pages/Login.js';
import Layout from '../components/Layout.js';
import Mypage from '../pages/Mypage.js';
const Router = () => {
    return (_jsxs(BrowserRouter, { children: [_jsx(Layout, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/Login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/Mypage", element: _jsx(Mypage, {}) })] })] }));
};
export default Router;
