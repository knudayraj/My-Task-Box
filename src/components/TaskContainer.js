import React from "react";
import TaskBoxList from './TaskBoxList'
import { useSelector } from 'react-redux'
import AddTask from "./AddTask";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const TaskContainer = (props) => {

    const tasks = useSelector(state => {
        return state.tasks
    })


    return (
            <div className="row mt-5">
                <div className="col">
                    <TaskBoxList />
                </div>
                <div className="col">
                    <AddTask /> 
                </div>
            </div>
    )
}

export default TaskContainer