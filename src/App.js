import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbars/Navbar'
import About from './pages/about/About'
import Login from './pages/auth/Login'
import Create from './pages/createblog/Create'


const App = () => {
  return (
    <div>
         <Navbar/>
           <Routes>
                <Route path='blog-site-login' element={<Login/>}/>
                <Route path='create' element={<Create/>}/>
                <Route path='about' element={<About/>}/>
                <Route/>
           </Routes>
    </div>
  )
}

export default App
