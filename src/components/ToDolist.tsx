import '../App.css'
import React from "react"
import { ITask } from "../interface";
interface Props{
     task:ITask;
     completetask(TaskToDelete:string):void;
}
export const ToDolist=({task,completetask}:Props)=>{
     return( 
        <div className="task">
            <div className="content">
                <span>{task.TaskName}</span>
                <span>{task.Deadline}</span>
            </div>
            <button onClick={()=>{completetask(task.TaskName)}}>X</button>

        </div>
);
};