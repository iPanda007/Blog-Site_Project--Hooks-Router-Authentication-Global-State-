import React from 'react'
import styles from './Create.module.css'
const Create = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span className={styles.header}> Create Blog </span>
            <form action="" autoComplete='off' className={styles.createForm}>
                    <input type="text"  name='title' placeholder='title' 
                    className={styles.createInput}

                    />
                    <input type="type" name='type' placeholder='Type' 
                     className={styles.createInput}
                    />
                    <textarea name="description"
                     className={styles.createTextarea}
                    ></textarea>
                    <button className={styles.createButton}>Create Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Create
