import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import Main from './Main';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { changeTheme } from './redux/slices/themeSlice';

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
		<>
			<Main />
			<ToastContainer />
		</>
	);
}

export default App;
