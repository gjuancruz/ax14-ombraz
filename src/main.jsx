import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from '../redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DMs from './DMs.jsx';
import Navbar from './Navbar.jsx';
import Email from './Email.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dm",
    element: <DMs></DMs>
  },
  {
    path: "/email",
    element: <Email></Email>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)