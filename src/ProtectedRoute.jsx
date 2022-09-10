import React from 'react'
import useAuth from './context/AuthContext'
import {Navigate} from "react-router-dom"
const ProtectedRoute = ({children}) => {
    const auth = useAuth();
  return (
    <div>
          {auth.user ? (
            <div>{children}</div>
          ):(<Navigate to="/blog-site-login"/>)}
    </div>
  )
}

export default ProtectedRoute
