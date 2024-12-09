import userStore from '../store/store.js';
import { Navigate } from 'react-router-dom';

const RouteProtect = ({ children }: any) => {
    const { user } = userStore((state) => state);
    if (!user) {
        alert('로그인 해주세요😢');
        return <Navigate to={'/'} />;
    }
    return children;
};

export default RouteProtect;
