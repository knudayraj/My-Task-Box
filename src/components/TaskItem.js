import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteTask } from "../actions/taskAction";
import TaskForm from "./TaskForm";
import EditTask from '../components/EditTask'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

const TaskItem = (props) => {
    const [toggle, setToggle] = useState(false)
    const { id, title, status } = props

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        // console.log(id)
        const confirmRemove = window.confirm("are you sure ?")
        if(confirmRemove){
            dispatch(startDeleteTask(id))
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            { toggle ? (
                <div>
                    <EditTask 
                        id={id}
                        title={title}
                        status={status}
                        handleToggle={handleToggle}
                    />
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-info mt-2 mb-3" onClick={handleToggle}>Cancel</button>
                            </div>
                        </div>
                    {/* <button onClick={handleToggle}> Cancel </button> */}
                </div>
            ) : (
                        <div className="card mt-2">
                            <div className="card-title mt-3" style={{textAlign : "center"}}>
                            { status ? 
                                    ( <h3 style={{color : "green"}}> { title }</h3>  
                                        ) : ( 
                                        <h3 style={{color : "red"}}> { title }</h3> )  
                                    }
                                <div className="row">
                                    <div className="col">
                                        {/* <button className="btn btn-info mt-2 mb-3" style={{padding : "5px", borderRadius : "5px", width : "90px", height : "40px", float : "right" }} onClick={handleToggle}>Edit</button> */}
                                        <BiEdit className="btn btn-info mt-2 mb-3" style={{padding : "5px", borderRadius : "5px", width : "90px", height : "40px", float : "right" }} onClick={handleToggle} />
                                    </div>
                                    <div className="col">
                                        {/* <button className="btn-danger mt-2 mb-3" style={{padding : "5px",   borderRadius : "5px", width : "90px", height : "40px", float : "left" }}  onClick={() => {handleRemove(id)}}> Remove </button> */}
                                        <RiDeleteBinLine className="btn-danger mt-2 mb-3" style={{padding : "5px",   borderRadius : "5px", width : "90px", height : "40px", float : "left" }}  onClick={() => {handleRemove(id)}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
            )}
        </div>
    )
}

export default TaskItem