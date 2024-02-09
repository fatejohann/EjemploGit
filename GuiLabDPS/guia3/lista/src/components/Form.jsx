'use client'
import React , {useState} from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css"
const Form = () => {
    const [todo,setTodo]=useState({})
    const [todos,setTodos]=useState([
        {todo:'todo 1'},
        {todo:'todo 2'},
        {todo:'todo 3'}

    ])

    const handleChange=e=>setTodo({[e.target.name]:e.target.value})
    const handleclick=e=>console.log('click click')


    return (
        <>
        <Form onSubmit={e=>e.preventDefault()}>
            <label>Agregar tarea</label>
            <input className={styles.Form_input} type="text" name='todo' onChange={handleChange} />
            <button className={styles.Form_button} onClick={handleclick}><Agregar></Agregar></button>
        </Form>
      
        </>
    )
}
export default Form