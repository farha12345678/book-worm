import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ListedBooks from './Components/ListedBooks';
import PagesToRead from './Components/PagesToRead';
import Root from './Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children : [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/listedBooks",
    element: <ListedBooks></ListedBooks>
  },
  {
    path: "/pagesToRead",
    element: <PagesToRead></PagesToRead>
  }
]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     
  </React.StrictMode>,
)
