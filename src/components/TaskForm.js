import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { startPostTask } from '../actions/taskAction'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import { BiSave } from 'react-icons/bi'

const TaskForm = (props) => {
    const {formSubmit, id : slNo, title : taskTitle, status : taskStatus } = props
    const [id, setId] = useState('') //slNo ? slNo : uuidv4()
    const [title, setTitle] = useState( taskTitle ? taskTitle : '')
    const [status, setStatus] = useState(taskStatus ? taskStatus : false)

    const handleChange = (e) => {
        const inputValue = e.target.value
        setTitle(inputValue) 
    }

    const dispatch = useDispatch()

    const handleStatusChange = (e) => {
        setStatus(!status)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : slNo ? slNo : uuidv4(),
            title : title,
            status : status
        }
        // console.log('formData',formData)
        // dispatch(startPostTask(formData))
        formSubmit(formData)
        setId('')
        setTitle('')
        setStatus(false)
    }
    
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="form-floating mt-5 mb-3">
                    
                    <input className="form-control" id="floatingInput" placeholder="enter title" type="text" value={title} onChange={handleChange} />
                    <label htmlFor="floatingInput"> Enter title </label>
                </div>

                
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" checked={status} onChange={handleStatusChange} />
                    <label> Completed </label>
                </div>

                <input className="btn btn-success mt-2" type="submit" value="Save" />
            </form>
        </div>
    )
}

export default TaskForm