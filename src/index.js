import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home/Home';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Detail from './view/Detail/Detail';
import Add from './view/Add/Add'
import Update from './view/Update/Update'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/detail/:rollNo",
        element:<Detail/>
    },
    {
        path:"/edit/:rollNo",
        element:<Update/>
    },
    {
        path:"/Add",
        element:<Add/>
    }
])
root.render(<RouterProvider router={router}/>);


