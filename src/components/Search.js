import React, { useEffect } from 'react'
import './Search.css'

const Search = ({search, setsearch, todo, settodo}) => {
  const submitForm = e =>{
    e.preventDefault()
    setsearch('')
    let newSearch ={
      search:search,
      checked:false,
      edit:false
    }
    if (!newSearch.search || /^\s*$/.test(newSearch.search)) {
      return newSearch.search
    }
    let updatedTodos = [newSearch, ...todo]
    settodo(updatedTodos)
    localStorage.setItem("saveTodos", JSON.stringify(updatedTodos))
  }

  useEffect(() =>{
    let savedTodo = JSON.parse(localStorage.getItem("saveTodos"));
    if (savedTodo) {
      settodo(savedTodo)
    }
  },[settodo])


  return (
    <div className='search-container'>
        <form className='search-form' onSubmit={submitForm}>
            <input type='text' value={search} onChange={ e => setsearch(e.target.value)} placeholder='Add Task' />
            <button className='submit-btn' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Search