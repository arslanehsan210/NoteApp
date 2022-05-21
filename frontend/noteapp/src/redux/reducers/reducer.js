import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,
    USER_LOGIN_FAILED,

    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILED
} from "../constants/constant";

export const userLoginReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_LOGIN_FAILED:
            return { loading: false, error: action.payload };
        case USER_LOGOUT_REQUEST:
            return {};
        default:
            return state;
    }
};
export const userRegisterReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_REGISTER_FAILED:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true };
        case USER_UPDATE_FAILED:
            return { loading: false, error: action.payload, success: false };
        default:
            return state;
    }
};