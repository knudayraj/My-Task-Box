import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import TaskReducer from '../reducers/taskReducer'


const configStore = () => {
    const store = createStore(combineReducers({
        tasks : TaskReducer
    }), applyMiddleware(thunk))
    return store
}

export default configStore