import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';



const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
])


export const Context = React.createContext();

function Main() {


  return (
    <Context.Provider>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)