
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

export const noteListReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
      case NOTES_LIST_REQUEST:
        return { loading: true };
      case NOTES_LIST_SUCCESS:
        return { loading: false, notes: action.payload };
      case NOTES_LIST_FAILED:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const noteCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case NOTES_CREATE_REQUEST:
        return { loading: true };
      case NOTES_CREATE_SUCCESS:
        return { loading: false, success: true };
      case NOTES_CREATE_FAILED:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  
export const noteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_UPDATE_REQUEST:
      return { loading: true };
    case NOTES_UPDATE_SUCCESS:
      return { loading: false, successs: true };
    case NOTES_UPDATE_FAILED:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return { loading: true };
    case NOTES_DELETE_SUCCESS:
      return { loading: false, successss: true };
    case NOTES_DELETE_FAILED:
      return { loading: false, error: action.payload, successss: false };

    default:
      return state;
  }
};