import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './TodoForm.css'

const TodoForm = ({todo, settodo, EditTodos, check, setcheck}) => {

    const DeleteTodos = (index) =>{
        let reducedTodos = [...todo]
        reducedTodos.splice(index, 1)
        settodo(reducedTodos)
        localStorage.setItem("saveTodos", JSON.stringify(reducedTodos))
    }

    const CompleteTodos = (index) =>{
        // setcheck(true)
        settodo(prevTodo =>{
            const updatedTodos = [...prevTodo]
            updatedTodos[index].checked = !updatedTodos[index].checked
            localStorage.setItem("saveTodos", JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }
  return todo.map((todos, index) =>{
    return(
    <div className='form-container' key={index}>
        <div className='main-form'>
            {todos.checked ? (
                <div className="form-div">
                    <div className='form-div-container'>
                        <p>{todos.search}</p>
                        <div>
                            <input type='checkbox' className='checkbox' checked={todos.checked} onChange={() => CompleteTodos(index)}/>
                            <FaEdit title='edit' className='edit' onClick={() => EditTodos(index)}/>
                            <MdDelete title='delete' className='delete' onClick={() => DeleteTodos(index)}/>
                        </div>
                    </div>
                </div>
                ): (
                <div className="form-sub-div">
                        <p>{todos.search}</p>
                        <div>
                            <input type='checkbox' className='checkbox' checked={todos.checked} onChange={() => CompleteTodos(index)}/>
                            <FaEdit title='edit' className='edit' onClick={() => EditTodos(index)}/>
                            <MdDelete title='delete' className='delete' onClick={() => DeleteTodos(index)}/>
                    </div>
                </div>
            )}
        </div>
    </div>
        )
    })

}

export default TodoForm