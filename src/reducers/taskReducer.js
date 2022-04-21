const taskInitialValue = []

const TaskReducer = (state = taskInitialValue, action) => {
    switch(action.type){
        case 'SET_TASKS' : {
            return action.payload
        }
        case  'POST_TASK' : {
            return [...state, action.payload ]
        }
        case 'REMOVE_TASK' : {
                return state.filter(e => {
                    if(e.id !== action.payload){
                        return {...e}
                    }
                }) 
            }
        case 'EDIT_TASK' : {
            // console.log('EDIT_TASK', action.payload)
            return state.map(ele => {
                if(ele.id === action.payload.id){
                    return {...action.payload }
                }else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default TaskReducer