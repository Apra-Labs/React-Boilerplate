import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './theme.scss';
import { ToastContainer } from 'react-toastify';
import { useEffect, lazy } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { changeTheme } from './redux/slices/themeSlice';
import {  Outlet } from 'react-router-dom';
const Navigation = lazy(() => import('./containers/navigation/Navigation'));
const Footer = lazy(() => import('./containers/footer/Footer'));

const App = () => {
	const currentTheme = useAppSelector(state => state.themeReducer.theme);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		const themeValue = isDarkTheme.matches ? 'dark' : 'light';
		dispatch(changeTheme(themeValue));
	}, []);

	useEffect(() => {
		document.body.className = currentTheme;
	}, [currentTheme]);

	return (
		<div>
			<Navigation />
			<Footer />
			<Outlet />
			<ToastContainer />
		</div>
	);
}

export default App;
