import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {TodoList} from "./TodoList";
import {tasks1Type,} from './TodoList'
type FilterValueType= 'All' | 'Active' | 'Completed'
function App(){
    let [tasks, setTasks]= useState<Array <tasks1Type>>([
        {id:v1(), title:'CSS', isDone: true},
        {id:v1(), title:'JavaScript', isDone: true},
        {id:v1(), title:'React', isDone: false},

    ])

    let [filter, setFilter]= useState <FilterValueType>('All')
    let tasksForTodoList=tasks
    if(filter==='Active'){
        tasksForTodoList=tasks.filter(t=>t.isDone)
    }
    if(filter==='Completed'){
        tasksForTodoList=tasks.filter(t=>!t.isDone)
    }
    function chengFilter(value:FilterValueType){
        setFilter(value)
    }
    function addTask(title:string){
        let task={id:v1(), title: title, isDone: false}
        let newTask=[task, ...tasks]
        setTasks(newTask)
    }
function removeTasks(id:string){
    let filterTasks=tasks.filter(t=>t.id !== id)
    setTasks(filterTasks)
}
    return (
        <div className="App">
            <TodoList title={'What to learn'}
                      tasks={tasksForTodoList}
                      removeTasks={removeTasks}
                      chengFilter={chengFilter}
                      addTask={addTask}
            />


        </div>
    );
}

export default App;
