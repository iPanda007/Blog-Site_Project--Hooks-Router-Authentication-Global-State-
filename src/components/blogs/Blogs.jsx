import React,{useContext} from 'react'
import styles from './Blogs.module.css'
import BlogsContext from '../../context/BlogContext';
const Blogs = () => {
  const {blogs} =  useContext(BlogsContext);
  console.log(blogs)
  return (
    <div className={styles.blogsContainer}>
        <div className={styles.blogslist}>
            {
              blogs.map(blog=>(
                <div className={styles.blog} key={blog.id}>
                <span className={styles.blogTitle}>{blog.title}</span>
                <span className={styles.blogType}>{blog.type}</span>
                <p className={styles.blogDescription}>
                   {blog.blogDescription}
                </p>
                <button className={styles.blogDelete}>Delete</button>
            </div>
              ))
            }
        </div>
    </div>
  )
}

export default Blogs
