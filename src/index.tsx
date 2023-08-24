import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './i18nlanguage/i18n';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(

	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Suspense fallback="loading">
					<App />
				</Suspense>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>

);
