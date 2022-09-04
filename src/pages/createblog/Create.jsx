import React,{useState,useContext} from 'react'
import styles from './Create.module.css';
import { useNavigate } from 'react-router-dom';
import BlogsContext from '../../context/BlogContext';
const initialState ={
  title:'',
  type:'',
  description:'',
}
const Create = () => { 
  const {blogDispatch} = useContext(BlogsContext)
  const [formValue,setFormValue] = useState(initialState);
  const navigate = useNavigate();
   const formHandler = (e)=>{
          const {name,value} = e.target
          setFormValue({...formValue,[name]:value});
  
   }
   const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValue);
        let newBlog ={
          id:Math.random(),
          title:formValue.title,
          type:formValue.type,
          description:formValue.description,
        }
        blogDispatch({type:"BLOG_CREATE",payload:newBlog});
        navigate('/')

   }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span className={styles.header}> Create Blog </span>
            <form action="" autoComplete='off' className={styles.createForm}
              onSubmit={handleSubmit}
            >
                    <input type="text"  name='title' placeholder='title' 
                    className={styles.createInput}
                      value={formValue.title}
                      onChange={formHandler}
                    />
                    <input type="type" name='type' placeholder='Type' 
                     className={styles.createInput}
                     value ={formValue.type}
                     onChange={formHandler}
                    />
                    <textarea name="description"
                    id=""
                    cols="30"
                    rows ="10"
                     className={styles.createTextarea}
                     value={formValue.description}
                     onChange={formHandler}
                    ></textarea>
                    <button className={styles.createButton}>Create Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Create
