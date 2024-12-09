import userStore from '../store/store.js';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = userStore((state) => state);
    if (!user.success) {
        alert('로그인 해주세요😢');
        return <Navigate to={'/'} />;
    }
    return <Outlet />;
};

export default PrivateRoute;
