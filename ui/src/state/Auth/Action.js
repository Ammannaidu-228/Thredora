import { Frontend_Base_Url } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from 'axios'




// USer SIGNUP
const registerRequest = ()=> ({type:REGISTER_REQUEST})
const registerSuccess = (user)=> ({type:REGISTER_SUCCESS, payload:user})
const registerFailure = (error)=> ({type:REGISTER_FAILURE, payload:error})

export const register = (userData)=> async (dispatch)=>{
    dispatch(registerRequest());

    try {

        const responce = await axios.post(`${Frontend_Base_Url}/user/signup`, userData)
        const user = await responce.data;
        if(user.userToken){
            localStorage.setItem("userToken", user.userToken)
        }
        console.log(user)
        dispatch(registerSuccess(user.userToken))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }


}

// USer LOGIN
const loginRequest = ()=> ({type:LOGIN_REQUEST})
const loginSuccess = (user)=> ({type:LOGIN_SUCCESS, payload:user})
const loginFailure = (error)=> ({type:LOGIN_FAILURE, payload:error})

export const LOGIN = (userData)=> async (dispatch)=>{
    dispatch(loginRequest());

    try {

        const responce = await axios.post(`${Frontend_Base_Url}/user/signin`, userData)
        const user = await responce.data;
        console.log("userToken", user.userToken)
        if(user.userToken){
            localStorage.setItem("userToken", user.userToken)
        }
        dispatch(loginSuccess(user.userToken));
        await console.log(user)


    } catch (error) {
        dispatch(loginFailure(error.message))
    }


}

// User Profile
const getUserRequest = ()=> ({type:GET_USER_REQUEST})
const getUserSuccess = (user)=> ({type:GET_USER_SUCCESS, payload:user})
const getUserFailure = (error)=> ({type:GET_USER_FAILURE, payload:error})

export const getUser = (userToken)=> async (dispatch)=>{
    dispatch(getUserRequest());

    try {

        const responce = await axios.get(`${Frontend_Base_Url}/user/profile`,{
            headers:{
                "Authorization": `Bearer ${userToken}`
            }
        })
        const user = await responce.data;
        dispatch(getUserSuccess(user))
        console.log(user)

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logout = ()=> (dispatch)=>{
    dispatch({type:LOGOUT, payload:null})
}