    import React,{useState} from 'react'
    import styles from './Login.module.css'
    import useAuth from '../../context/AuthContext'
    const Login = () => {
      const [user,setUser] = useState({username:"",password:""})
      const auth = useAuth();

      //Function
     const handleChange = (e)=>{
         const {value,name} = e.target;
         setUser({...user,[name]:value})
     }
     const handleSubmit = (e)=>{
      e.preventDefault();
        auth.login(user)
     }
      return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.header}>
                    login
                </span>
                <form className={styles.LoginForm}
                 onSubmit={handleSubmit}
                autoComplete="off">
                        <input type="text" 
                         onChange={handleChange}
                         value={user.username}
                        name="username" placeholder="user name" className={styles.loginInput}
                        
                        />
                        <input type="password"
                         onChange={handleChange}
                        value={user.password} name="password" placeholder="Password" className={styles.loginInput}/>
                        <button className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
      )
    }
    
    export default Login
    