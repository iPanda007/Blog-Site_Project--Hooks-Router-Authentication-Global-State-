    import React from 'react'
    import styles from './Login.module.css'
    const Login = () => {
      return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.header}>
                    login
                </span>
                <form className={styles.LoginForm}  autoComplete="off">
                        <input type="text" name="usename" placeholder="user name" className={styles.loginInput}/>
                        <input type="password" name="password" placeholder="Password" className={styles.loginInput}/>
                        <button className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
      )
    }
    
    export default Login
    