import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
  } from "../constants/constant"
  import axios from "axios";
  
//   export const login = (email, password) => async (dispatch) => {
//     try {
//       dispatch({ type: USER_LOGIN_REQUEST });
  
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
  
//       const { data } = await axios.post(
//         "/api/users/login",
//         { email, password },
//         config
//       );
  
//       dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
//       localStorage.setItem("userInfo", JSON.stringify(data));
//     } catch (error) {
//       dispatch({
//         type: USER_LOGIN_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };


export const login = (email,password) => async (dispatch)=>{


try {
    dispatch({type:USER_LOGIN_REQUEST});
    const config = {
      headers:{
        "Content-type":"application/json",
      },
    }
    

    const  { data } =await axios.post(
      "/api/users/login",
      {email,password},
      config
    )
    console.log('suucessfull login',data)
    
    dispatch({type:USER_LOGIN_SUCCESS,
    payload: data});
    localStorage.setItem('info',JSON.stringify(data))
    
    
    } catch (error) {
              dispatch({
                type: USER_LOGIN_FAILED,
                payload:
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
              });
            }

}

export const logout = ()=> async (dispatch)=>{
localStorage.removeItem('info')
dispatch({type: USER_LOGOUT_REQUEST})
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {

try {
  
  dispatch({ type: USER_UPDATE_REQUEST });

  const {
    userLoginReducers: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const {data} = await axios.put(
    'api/users/profile',
    user,
    config
  )

  dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

  localStorage.setItem("info", JSON.stringify(data));

} catch (error) {
  dispatch({
    type: USER_UPDATE_FAILED,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });

}}