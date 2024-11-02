import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:"404 Not Found",
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:"404 Not Found",
  },
  {
    path:"/projects",
    element:<Projects/>,
    errorElement:"404 Not Found",
  },
  {
    path:"/services",
    element:<Services/>,
    errorElement:"404 Not Found",
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement:"404 Not Found",
  }

])  
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
