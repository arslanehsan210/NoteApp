import {createStore, applyMiddleware} from "redux";
import cReducers from "./redux/reducers/main";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const userInfoFromStorage = localStorage.getItem("info")
  ? JSON.parse(localStorage.getItem("info"))
  : null;

const initialState = {
  userLoginReducers: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(cReducers,
    initialState,
     composeWithDevTools(applyMiddleware(...middleware)));


export default store;