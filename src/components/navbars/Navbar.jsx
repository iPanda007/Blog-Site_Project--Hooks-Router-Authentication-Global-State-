import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';
import useAuth from '../../context/AuthContext';
const Navbar = () => {
     const auth = useAuth();
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
       <h1 className={styles.header}><Link to='/'>Blogs Site</Link></h1>
        <nav className={styles.navbar}>
        <NavLink to="/">
            Home
       </NavLink>
       <NavLink to="/about">
            About
       </NavLink>
       <NavLink to="/create">
            Create
       </NavLink>
       {
           auth.user ? <button onClick={()=>auth.logout()} >logout</button> :     <NavLink to="/blog-site-login">
           Login
      </NavLink>
       }

        </nav>
       </div>
    </div>
  )
}

export default Navbar
