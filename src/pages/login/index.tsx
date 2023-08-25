import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/reducers/authSlice';
import { Form } from 'react-bootstrap';
import './styles.css';
import ButtonComponent from '../../components/ButtonComponent';
import { useTranslation } from 'react-i18next'
import FloatingLabelComponent from '../../components/FloatingLabelComponent';
import { ToastContainer, toast } from 'react-toastify';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === user.email && password === user.password) {
            console.log("Successfully logged in");
            const { name, email, phoneNumber } = user;
            dispatch(login({ name, email, phoneNumber }));
            toast.success('Success!', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate("/")
        } else {
            console.log("Error");
            toast.error('Error!', {
                position: toast.POSITION.TOP_RIGHT
            });
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
        <div className='formContainer'>
            <Form className='d-flex flex-column text-center justify-content-center border border-secondary p-4' onSubmit={handleSubmit}>
                <h2>{t("Login")}</h2>
                <FloatingLabelComponent label={t("Email")} style={{margin: 10}} onChange={handleEmail} type="email" placeholder={t("Email")}/>
                <FloatingLabelComponent label={t("Password")} style={{margin: 10}} onChange={handlePassword} type="password" placeholder={t("Password")}/>
                <ButtonComponent variant='primary' title={t("Login")} style={{width: 80}} type='submit'/>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default Login;