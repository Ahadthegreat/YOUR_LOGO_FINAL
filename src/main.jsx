import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ABout from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Privacypolicies from './components/Privacypolicies/Privacypolicies.jsx'

const router=createBrowserRouter([{
  path:'/',
  element: <Layout />,
  children:[
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'about',
      element:<ABout/>
    },{
      path:'contact',
      element:<Contact/>
    },
    {
      path:'privacy-policies',
      element:<Privacypolicies />
    }
  ]
}])

// const routr=createBrowserRouter([{
//   path:'//',
//   element:<Home/>,
//   children:[
//     {},{}
//   ]
// }])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
