import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useUserStore from '../store/store';

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
        return <Navigate to="/" />;
    };

    return (
        <div>
            <header className="fixed z-[30] w-[100%] h-[60px] box-border py-[5px] pl-[50px] pr-[100px] text-white">
                <nav className="flex flex-row justify-between text-[16px] min-w-[800px] items-center">
                    <Link to="/">
                        {/* <img src={homeImg} alt="홈" className="w-[40px]" /> */}
                        <p>호호호호홈</p>
                    </Link>
                    {user.success ? (
                        <div className="flex gap-[16px]">
                            <Link to="/Mypage">마이페이지</Link>
                            <span>|</span>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <div className="flex gap-[16px]">
                            <Link to="/signup">회원가입</Link>
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default Layout;
