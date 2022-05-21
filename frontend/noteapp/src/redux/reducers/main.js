import {combineReducers} from 'redux';
import { noteCreateReducer, noteListReducer, noteUpdateReducer,noteDeleteReducer } from './noteReducer';
import { userLoginReducers,userRegisterReducers, userUpdateReducer } from './reducer';




const cReducers = combineReducers({
    userLoginReducers,
    userRegisterReducers,

    noteListReducer,
    noteCreateReducer,
    noteUpdateReducer,
    noteDeleteReducer,
    userUpdateReducer
    
}) 




export default cReducers;