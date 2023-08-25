import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/Profile';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<Routes>
				<Route>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
