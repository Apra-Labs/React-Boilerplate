import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './locales/i18n';
import SpinnerComponent from './components/SpinnerComponent';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Suspense fallback={
					<SpinnerComponent
						animation='border'
						fullPage style={{ height: "10rem", width: "10rem" }}
					/>
				}>
					<App />
				</Suspense>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
