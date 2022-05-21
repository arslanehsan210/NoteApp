import {
    NOTES_UPDATE_REQUEST,
    NOTES_UPDATE_SUCCESS,
    NOTES_UPDATE_FAILED,
    NOTES_CREATE_FAILED,
    NOTES_CREATE_REQUEST,
    NOTES_CREATE_SUCCESS,
    NOTES_DELETE_FAILED,
    NOTES_DELETE_REQUEST,
    NOTES_DELETE_SUCCESS,
    NOTES_LIST_FAILED,
    NOTES_LIST_REQUEST,
    NOTES_LIST_SUCCESS,
  } from "../constants/noteConstants";

  import axios from 'axios';

// getState is use to get the all state of running application

  export const listNotes = ()=> async(dispatch, getState)=>{


try {
    dispatch({
        type: NOTES_LIST_REQUEST
    });

// getState is use to get the all state of running application

    const { userLoginReducers : {userInfo}}= getState();


    const config = {
    headers: {
        Authorization :`Bearer ${userInfo.token}` 
    }};

    const { data } =await axios.get(
        '/api/notes/',
        config
    )

dispatch({
    type: NOTES_LIST_SUCCESS,
    payload: data
})



} catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_LIST_FAILED,
      payload: message,
    });
}

  }


  export const createNote = (title,content,category)=>async(dispatch,getState)=>{
    
 
    dispatch({
      type: NOTES_CREATE_REQUEST
    })

    const {userLoginReducers : {userInfo}} = getState();
  const config = {
    headers :{
      "Content-Type" : "application/json",
      Authorization : `Bearer ${userInfo.token}`,
    },
  }
    try {
      
const {data} =await axios.post(
  'api/notes/create',
  {title,content,category}
  ,config
)

dispatch({
  type: NOTES_CREATE_SUCCESS,
  payload: data
})
    } catch (error) {
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTES_CREATE_FAILED,
      payload: message,
    });
    }

  }


  export const updateNote = (id, title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: NOTES_UPDATE_REQUEST,
      });
  
      const {
        userLoginReducers: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/notes/${id}`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_UPDATE_FAILED,
        payload: message,
      });
    }
    
  };


  export const deleteNote = (id) => async (dispatch, getState) => {

  try {
    
    dispatch({
      type: NOTES_DELETE_REQUEST,
    });

    const {
      userLoginReducers : {userInfo},
    } = getState();


    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    
    const { data } = await axios.delete(`/api/notes/${id}`, config);

    dispatch({
      type: NOTES_DELETE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  dispatch({
    type: NOTES_DELETE_FAILED,
    payload: message,
  });

  }
  
  }

