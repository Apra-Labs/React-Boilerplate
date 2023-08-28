import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<Routes>
				<Route>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
