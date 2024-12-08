import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
import Signup from '../pages/Signup.js';
import Login from '../pages/Login.js';
import Layout from '../components/Layout.js';
import Mypage from '../pages/Mypage.js';

const Router = () => {
    return (
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
