import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import Main from './Main';

const App = () => {
	useEffect(() => {
        const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		const themeValue = isDarkTheme.matches ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', themeValue);
    }, []);

	return (
		<>
			<Main />
			<ToastContainer />
		</>
	);
}

export default App;
