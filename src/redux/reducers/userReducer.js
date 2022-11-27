import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const initialState = {
    photo:'',
    name:'',
    logged:false,
    role:'',
    token:''
}

const userReducer = createReducer(initialState,(item)=>{
    item.addCase(userActions.signIn.fulfilled,(state,action)=>{
        const {success,response} = action.payload
        console.log(action.payload)
        if (success){
            let {user,token} = response.response
            localStorage.setItem('token',JSON.stringify({token:{
                user:token
            }}))
            let newState = {
                ...state,
                name:user.name,
                photo:user.photo,
                role:user.role,
                logged:true,
                token:token
            }
            return newState
        }else{
            let newState = {
                ...state,
                message:response
            }
            return newState
        }
    })
})

export default userReducer