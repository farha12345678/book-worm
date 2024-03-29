import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer} from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

import './index.css'

import { RouterProvider } from 'react-router-dom'

import Home from './Pages/Home';
import ListedBooks from './Components/ListedBooks';
import PagesToRead from './Components/PagesToRead';
import Root from './Root/Root';
import BookDetails from './Components/Books/BookDetails';
import ReadBooks from './Components/WishlistBooks/ReadBooks.jsx/ReadBooks';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks';
import {createBrowserRouter } from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
  

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
  
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/book/:id",
          element: <BookDetails></BookDetails>,
          loader: () => fetch('/data.json'),
          
        },
        {
          path: "/listedBooks",
          element: <ListedBooks></ListedBooks>,
          children: [
            {
              index: true,
              element: <ReadBooks></ReadBooks>,
              loader:() => fetch('/data.json')
            },
            {
              path: "wishlist",
              element: <WishlistBooks></WishlistBooks>,
              loader: () => fetch('/data.json')
            }
          ]
         
        },
  
        {
          path: "/pagesToRead",
          element: <PagesToRead></PagesToRead>,
          loader: () => fetch('/data.json'),
        }
      ]
    },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
