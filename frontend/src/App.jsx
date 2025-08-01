import Navbar from './components/shared/navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'jobs',
    element:<Jobs/>
  },
  {
    path:'browse',
    element:<Browse/>
  }
  
])

function App() {
 
  return (
    <>
 
 <RouterProvider router ={appRouter}/>
    </>
  )
}

export default App
