import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Privacypolicies from './components/Privacypolicies/Privacypolicies.jsx'
import User from './components/User/user.jsx'
import GetStarted from './components/GetStarted/GetStarted.jsx'
import Login from './components/Login/login.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router=createBrowserRouter([{
  path:'/',
  element: <Layout />,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },{
      path:'contact',
      element:<Contact/>
    },
    {
      path:'privacy-policies',
      element:<Privacypolicies />
    },{
      path:'user/:userid',
      element:<User />
    },
    {
      path:'/getstarted',
      element:<GetStarted />
    },
    {
      path:'/login',
      element:<Login />
    },
  ]
}])

// const router=createBrowserRouter([{
//   path:'//',
//   element:<Home/>,
//   children:[
//     {},{}
//   ]
// }])
 
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" afterSignInUrl="/getstarted">
    <RouterProvider router={router} />
    </ClerkProvider>
   </StrictMode>
)
