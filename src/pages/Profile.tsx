import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

import TableRow from "../components/TableRow";

const Profile: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    const navigate = useNavigate();

    const loggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
    const loggedInUser = useAppSelector((state) => state.authReducer.user);

    useEffect(() => {
        setIsLogin(loggedIn);
        setUser(loggedInUser);

        return () => {
            console.log('component unmounted');
        }
    }, [loggedIn, loggedInUser]);

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            {isLogin ?
                <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: 30 }}>
                    <div style={{ border: 1, borderStyle: 'solid', height: 100, width: 200, display: 'flex' }}>
                        <div style={{ margin: 10 }}>
                            <img src="" alt="profile image"></img>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <h3>Hello</h3>
                            <h3>{user.name}</h3>
                        </div>
                    </div>
                    <div style={{ width: 700, height: 500, border: 1, borderStyle: 'solid', padding: 10 }}>
                        <h3>Personal Information</h3>
                        <table>
                            <tbody>
                                <TableRow title="Name" value={user.name} />
                                <TableRow title="Email" value={user.email} />
                                <TableRow title="Phone Number" value={user.phoneNumber} />
                            </tbody>
                        </table>
                    </div>
                </div> :
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <button style={{ backgroundColor: '#068FFF', color: 'white', padding: 20, border: 0, borderRadius: 10, cursor: 'pointer'}} onClick={goToLogin}>Go to Login</button>
                </div>
            }
        </div>
    )
}

export default Profile