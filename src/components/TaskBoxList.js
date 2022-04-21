import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { startGetTask } from "../actions/taskAction";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

const TaskBoxList = (props) => {

    const dispatch = useDispatch()

    const tasks = useSelector(state => {
        return state.tasks
    })

    useEffect(() => {
       dispatch(startGetTask()) 
    },[])

    return (
        <div>
            { tasks.length === 0 ? 
                (<div>
                    <h1> No tasks found </h1>
                    <p> add your first task </p>
                </div>) : (
                    <div>
                        <h2>My Tasks - { tasks.length } </h2>
                        { tasks.map(task => {
                            return (
                                <TaskItem key={task.id} {...task} />
                            )
                        }) } 
                    </div>
                )
            }
        </div>
    )
}

export default TaskBoxList

