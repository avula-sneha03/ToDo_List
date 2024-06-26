import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import {ITask} from "./interface"
import { ToDolist } from './components/ToDolist';


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0 );
  const [todoList,setToDoList]=useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else setDeadline(Number(event.target.value));
  };

  const handleClick=():void=>{
    const newTask={TaskName: task, Deadline:deadline};
   setToDoList([...todoList,newTask]);
   setTask("");
   setDeadline(0);
  };

  const completetask=(taskToDelete:string):void=>{
    setToDoList(todoList.filter((task)=>{
      return task.TaskName!==taskToDelete;
    }))
  };
  return (
    <div className="App">
      <div className='header' >
        <div className='inputCont'>
          <input type='text' placeholder='Task...' value={task} name="task" onChange={handleChange}></input>
          <input type='number' placeholder='Duration...' value={deadline} name="deadline" onChange={handleChange}></input>
        </div>
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className='todoList'>
       {todoList.map((task:ITask, key:number)=>{
        return <ToDolist task={task} key={key} completetask={completetask}/>
       })}
      </div>
    </div>
  );
}

export default App;
