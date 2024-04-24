import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import TodoForm from './components/TodoForm';

function App() {
  const [search, setsearch] = useState('');
  const [todo, settodo] = useState([]);
  const [editInput, seteditinput] = useState('')
  const [check, setcheck] = useState(false)
  const EditTodos = (index) =>{
    settodo(prevTodo =>{
        let editedTodos = [...prevTodo]
        editedTodos[index].edit = !editedTodos[index].edit
        return editedTodos
    })
    seteditinput(editedInput =>{
      let editedTodoInput = [...todo, ...editedInput]
      return editedTodoInput[index].search
    })
  }
  const closeTodo =(index) =>{
    settodo(prevTodo =>{
      let editedTodos = [...prevTodo]
      editedTodos[index].edit = !editedTodos[index].edit
      return editedTodos
  })
  }

  const EditValueTodos = (index) =>{
    seteditinput('')
    if (!editInput || /^\s*$/.test(editInput)) {
      return editInput
    }
    let editedValueTodos = [...todo]
    editedValueTodos[index].search = editInput
    editedValueTodos[index].edit = false
    settodo(editedValueTodos)
    localStorage.setItem('saveTodos', JSON.stringify(editedValueTodos))
  }

  const checkValue = () =>{
    setcheck(item =>{
      item = !item
      return item
    })
    let checkTodos = [...todo]
    checkTodos.map((item) =>{
      item.checked = true
      return item
    })
    localStorage.setItem("saveTodos", JSON.stringify(checkTodos))
  }

  const deleteTask = () =>{
    let deleteAllTodos = [...todo]
    deleteAllTodos.splice(0)
    settodo(deleteAllTodos)
    localStorage.setItem("saveTodos", JSON.stringify(deleteAllTodos))
  }
  return (
    <div className="container">
      <div className="main-container">
        <h1>Todo-List-App</h1>
        <Search search={search} setsearch={setsearch} todo={todo} settodo={settodo}/>
        <TodoForm todo={todo} settodo={settodo} EditTodos={EditTodos} check={check} setcheck={setcheck}/>
        <div className='footer'>
          <div className='footer-container'>
            <button className='Check-all' onClick={checkValue}>Check All</button>
            <button className='Delete-task' onClick={deleteTask}>Delete Tasks</button>
          </div>
        </div>
      </div>
      {todo.map((todos, index) =>{
        return (
          todos.edit && (
          <div className='edit-container' key={index}>
            <div className='edit-container-div'>
              <div className='edit-word'>
                <h2>Edited Task</h2>
                <div className='times' onClick={() => closeTodo(index)}>&times;</div>
              </div>
              <div className='first-underline'></div>
              <input type='text' placeholder='edit task' value={editInput} onChange={e => seteditinput(e.target.value)} className='edit-text'/>
              <div className='second-underline'></div>
              <div className='edit-btn'>
                <button className='close-btn' onClick={() => closeTodo(index)}>Close</button>
                <button className='save-changes' onClick={() => EditValueTodos(index)}>Save Changes</button>
              </div>
            </div>
        </div>
        )
        )
      })}
    </div>
  );
}

export default App;
