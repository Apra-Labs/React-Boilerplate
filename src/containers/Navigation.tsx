import React, { useCallback, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut, login } from '../redux/reducers/authSlice';
import { toast } from 'react-toastify';
import { Offcanvas } from 'react-bootstrap';
import InputFloatingLabelComponent from '../components/InputFloatingLabelComponent';
import ButtonComponent from '../components/ButtonComponent';
import { faSun, faMoon, faBars, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/Navigation.module.css';
import ModalComponent from '../components/ModalComponent';
import { changeLanguage } from '../redux/reducers/languageSlice';
import './styles/styles.css';

const Navigation: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [icon, setIcon] = useState<any>(faSun);
    const [language, setLanguage] = useState<string>('');

    const loggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
    const currentLanguage = useAppSelector((state) => state.langReducer.language);
    const location = useLocation();
    const theme = document.documentElement.getAttribute('data-theme');

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            setIcon(faMoon);
        } else if (currentTheme === 'light') {
            setIcon(faSun);
        }
    }, []);

    useEffect(() => {
        setLanguage(currentLanguage);
    }, [currentLanguage]);

    useEffect(() => {
        setIsLogin(loggedIn);
    }, [loggedIn]);

    const { i18n, t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSelectLang = (e: string | null) => {
        const lang_code = e || undefined;
        if (lang_code === "en") {
            dispatch(changeLanguage("English"));
        } else {
            dispatch(changeLanguage("español"));
        }
        i18n.changeLanguage(lang_code);
    };

    const handleLogOut = useCallback(() => {
        dispatch(logOut());
        toast.success("Logged out", {
            position: toast.POSITION.TOP_RIGHT
        })
    }, []);

    const handleClose = useCallback(() => {
        setShow(false);
    }, []);

    const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleShow = useCallback(() => {
        setShow(true);
    }, []);

    const changeIcon = () => {
        if (icon === faMoon) {
            setIcon(faSun);
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (icon === faSun) {
            setIcon(faMoon);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (email === user.email && password === user.password) {
            console.log("Successfully logged in");
            const { name, email, phoneNumber } = user;
            dispatch(login({ name, email, phoneNumber }));
            toast.success('Success!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setShow(false);
        } else {
            console.log("Error");
            toast.error('Error!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, []);

    const user = {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "john123",
        phoneNumber: "9999997777"
    }

    return (
        <>
            <Navbar expand="lg" className={styles.nav} fixed='top' role='myNavbar'>
                <Navbar.Brand as={Link} to={"/"} className={styles.titleLink} >
                    <img src={require('../assets/images/logo1.png')} width={30} height={30} />
                    {" " + t("MyApplication")}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-offcanvas" className={styles.toggleButton}>
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton closeVariant={theme === "dark" ? "white" : ""} className={styles.offcanvasNav}>
                        <Offcanvas.Title>
                            <Navbar.Brand as={Link} to={"/"} className={styles.navLink}>{t("MyApplication")}</Navbar.Brand>
                            <button className={styles.themeButtonOnCollapse} onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.offcanvasNav}>
                        <Nav className='ms-auto'>
                            {location.pathname === "/" ?
                                <>
                                    <Nav.Link as={Link} to={"/uikit/alert"} className={styles.navLink}>{t("UiKit")}</Nav.Link>
                                    {!isLogin ?
                                        <Nav.Link className={styles.loginLink} onClick={handleShow}>{t("Login")}</Nav.Link> :
                                        <Nav.Link className={styles.loginLink} onClick={handleLogOut}>{t("Logout")}</Nav.Link>
                                    }
                                    <NavDropdown
                                        title={<span className={styles.navDropdown}>{language}</span>}
                                        id='navbarScrollingDropdown'
                                        onSelect={onSelectLang}
                                        className={styles.navDropdown}
                                    >
                                        <NavDropdown.Item eventKey={"en"} className={styles.navDropdownMenu}>{t("English")}</NavDropdown.Item>
                                        <NavDropdown.Item eventKey={"es"} className={styles.navDropdownMenu}>{t("Spanish")}</NavDropdown.Item>
                                    </NavDropdown>
                                    <button className={styles.themeButton} onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                </> :
                                <div className={styles.sideLinks}>
                                    <Nav.Link as={Link} active={location.pathname === "/"} to={"/"} className={styles.navLink}>
                                        <span>
                                            <FontAwesomeIcon icon={faArrowLeftLong} />
                                        </span>
                                        {' ' + t("Backtomainmenu")}
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/alert"} className={styles.navLink}>{t("Alert")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/button"} className={styles.navLink}>{t("Button")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/card"} className={styles.navLink}>{t("Card")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/checkbox"} className={styles.navLink}>{t("Checkbox")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/dropdown"} className={styles.navLink}>{t("Dropdown")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/image"} className={styles.navLink}>{t("Image")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/input"} className={styles.navLink}>{t("Input")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/inputfloatinglabel"} className={styles.navLink}>{t("InputFloatingLabel")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/modal"} className={styles.navLink}>{t("Modal")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/radio"} className={styles.navLink}>{t("Radio")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/rowcolumn"} className={styles.navLink}>{t("RowColumn")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/spinner"} className={styles.navLink}>{t("Spinner")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/textarea"} className={styles.navLink}>{t("Textarea")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/toast"} className={styles.navLink}>{t("Toast")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/toggleswitch"} className={styles.navLink}>{t("ToggleSwitch")}</Nav.Link>
                                </div>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
            <ModalComponent
                show={show}
                onHide={handleClose}
                title={t("Login")}
                body={
                    <form onSubmit={handleSubmit}>
                        <InputFloatingLabelComponent
                            label={t("Email")}
                            type='email'
                            placeholder={t("Email")}
                            onChange={handleEmail}
                            classNameFloatingContainer={styles.modalInputContainer}
                            classNameFloatingInput={styles.modalInput}
                            required
                        />
                        <InputFloatingLabelComponent
                            label={t("Password")}
                            type='password'
                            placeholder={t("Password")}
                            onChange={handlePassword}
                            classNameFloatingContainer={styles.modalInputContainer}
                            classNameFloatingInput={styles.modalInput}
                            required
                        />
                        <ButtonComponent label={t("Login")} type='submit' />
                    </form>
                }
                modalHeaderClass={styles.loginHeader}
                modalBodyClass={styles.loginBody}
                closeVariant={theme === "dark" ? "white" : ""}
                centered
            />
        </>
    )
}

export default Navigation;