import axios from 'axios'

export const startGetTask = () => {
    return (dispatch) => {
        axios.get('http://localhost:3033/api/tasks')
            .then(response => {
                // console.log(response.data)
                const tasks = response.data
                dispatch(setTask(tasks))
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

    export const setTask = (tasks) => {
        return {
            type : 'SET_TASKS',
            payload : tasks
        }
}


export const startPostTask = (formData) => {
    return (dispatch) => [
        axios.post('http://localhost:3033/api/tasks',formData)
            .then(response => {
                // console.log(response.data)
                const postedTask = response.data
                dispatch(postTask(postedTask))
            })
            .catch(err => {
                console.log(err.message)
            })
    ]
}

export const postTask = (postedTask) => {
    return {
        type : 'POST_TASK',
        payload : postedTask
    }
}

 
export const startDeleteTask = (id) => {
    return (dispatch) => [
    axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then(response => {
            // console.log(response.data)
            const deleteTask = response.data
            dispatch(removeTask(deleteTask.id))
        })
        .catch(err => {
            console.log(err.message)
        })
    ]
}

export const removeTask = (id) => {
    return {
        type : 'REMOVE_TASK',
        payload : id
    }
}

export const startUpdateTask = (FormData) => {
    return (dispatch) => [
        axios.put(`http://localhost:3033/api/tasks/${FormData.id}`, FormData)
            .then(response => {
                // console.log(response.data)
                const editTask = response.data
                dispatch(editedTask(editTask))
            })
            .catch(err => {
                console.log(err.message)
            })
    ]
}

const editedTask = (editTask) => {
    return {
        type : 'EDIT_TASK',
        payload : editTask
    }
}


