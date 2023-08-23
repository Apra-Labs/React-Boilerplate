import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logOut } from '../redux/reducers/authSlice'

const Navbar: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const userLogin = useAppSelector((state) => state.authReducer.isLoggedIn);

    useEffect(() => {
        setIsLogin(userLogin)

        return () => {
            console.log('Component unmounted: ');
        }
    }, [userLogin]);

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', backgroundColor: '#A2FF86' }}>
                <li style={{ textDecoration: 'none', marginTop: 10, marginLeft: 10 }}>
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>My Application</Link>
                </li>
                <div>
                    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none' }}>
                        {!isLogin ?
                            <li style={{ margin: 10 }}>
                                <Link to={"/login"} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                            </li> :
                            <li style={{ margin: 10, color: 'white', cursor: 'pointer' }} onClick={handleLogOut}>
                                Logout
                            </li>
                        }
                        <li style={{ margin: 10 }}>
                            <Link to={"/profile"} style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar