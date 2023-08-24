import { useState } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../redux/hooks';
import { login } from '../redux/reducers/authSlice';


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(email === user.email && password === user.password) {
            console.log("Successfully logged in");
            const { name, email, phoneNumber } = user;
            dispatch(login({name, email, phoneNumber}));
            navigate("/")
        } else {
            console.log("Error");
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const user = {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "john123",
        phoneNumber: "9999997777"
    }

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{border: 1, borderStyle: 'solid', padding: 30, alignItems: 'center', display: "flex", justifyContent: 'center',flexDirection: 'column', borderRadius: 15}}>
                <h2 style={{ margin: 10 }}>Login</h2>
                <Input type="email" placeholder="Email" onChange={handleEmail}/>
                <Input type="password" placeholder="Password" onChange={handlePassword}/>
                <Button title="Login" />
            </form>
        </div>
    )
}

export default Login;