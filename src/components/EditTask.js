import React from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { startUpdateTask } from '../actions/taskAction'


const EditTask = (props) => {
    const { id, title, status, handleToggle } = props

    const dispatch = useDispatch()

    const formSubmit = (task) => {
        // console.log(task)
        dispatch(startUpdateTask(task))
        handleToggle()
    }


    return (
        <div>
            <TaskForm 
                id={id}
                title={title}
                status={status}
                formSubmit={formSubmit}
            />
        </div>
    )
}

export default EditTask