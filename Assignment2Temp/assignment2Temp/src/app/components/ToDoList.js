import React, {useState} from 'react'
import "./ToDoList.css"

//list of items to do, can delete and add 
function ToDoList({ todos }) {

    const [tasks, setTasks] = useState(["Take a shower"]);
    const [newTask, setNewTask] = useState("");

    //set new task value when input in field
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    //add task to list of tasks
    function addTask(){
      if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
      }
    }

    //delete task from list of tasks
    function deleteTask(index){
      const updatedTasks = tasks.filter((_, i)=> i !== index);
      setTasks(updatedTasks);
    }


    return (
      <div className='to-do-list'>
        <h2 className='to-do-list-header'>To Do List</h2>
        <div>
          <input 
              className='to-do-text-input'
              type="text"
              placeholder="Enter a Task"
              value={newTask}
              onChange={handleInputChange}
              />
          <button className='add-button' onClick={addTask}>Add</button>

          <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                      className='delete-button'
                      onClick={()=> deleteTask(index)}>
                      Delete
                    </button>
                </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
  export default ToDoList;
