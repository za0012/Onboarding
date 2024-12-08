import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from '../pages/Todos';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import Mypage from '../pages/mypage';

const Router = () => {
    return (
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
