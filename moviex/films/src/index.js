import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieCards from './components/cards/link_card';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/utilits/helpers/error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
// import mainFont from "../src/assets/fonts/jellee.roman.ttf";

const theme = createTheme({
  typography: {
    fontFamily: 'Roman Jelly',
    h1: {
      fontFamily: 'Roman Jelly',
    },
    h2: {
      fontFamily: 'Roman Jelly',
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inf_about/:movieId',
    element: <MovieCards />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))`
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
