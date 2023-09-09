import React from 'react'
import Layout from './layout/Layout'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Not from './not/Not.jsx'
import Portfolio from './portfoilo/Portfolio'

export default function App() {
  let x = createBrowserRouter ([
    {
      path:"",element:<Layout/>,children:[
          {path:"",element:<Home/>},
          {path:"about" , element:<About/>},
          {path:"contact",element:<Contact/>},
          {path:"portfolio",element:<Portfolio/>},
          {path:'*' ,element: <Not/>}
      ]},
    
  ])


  return <>
  
  <RouterProvider router={x}/>
  
  </>
}
