import React from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { startPostTask } from '../actions/taskAction'

const AddTask = (props) => {
    // const { formSubmit } = props


    const dispatch = useDispatch()

    const formSubmit = (task) => {
        dispatch(startPostTask(task))
    }

    return (
        <div>
            <TaskForm formSubmit={formSubmit} />
        </div>
    )
}

export default AddTask