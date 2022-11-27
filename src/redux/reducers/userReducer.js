import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const initialState = {
    photo:'',
    name:'',
    logged:false,
    role:'',
    token:'',
    load: false,
    error: false
}

const userReducer = createReducer(initialState,(item)=>{
    item
        .addCase(userActions.signIn.pending, (state, action) => {
            return {
                ...state,
                load:true,
                error:false
            }
        })
        .addCase(userActions.signIn.fulfilled,(state,action)=>{
            const {success,response} = action.payload
            if (success){
                let {user,token} = response.response
                localStorage.setItem('token',JSON.stringify({token:{
                    user:token
                }}))
                let newState = {
                    ...state,
                    photo:user.photo,
                    name:user.name,
                    logged:true,
                    role:user.role,
                    token:token,
                    load:false,
                    error:false
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
        .addCase(userActions.signIn.rejected, (state, action) => {
            return {
                ...state,
                load:false,
                error:true
            }
        })
        .addCase(userActions.signToken.pending, (state, action) => {
            return {
                ...state,
                load:true,
                error:false
            }
        }) 
        .addCase(userActions.signToken.fulfilled, (state, action) => {
            const {success,response} = action.payload
            if (success){
                let {user,token} = response
                let newState = {
                    ...state,
                    name:user.user.name,
                    photo:user.user.photo,
                    role:user.user.role,
                    logged:true,
                    token:token,
                    load:false,
                    error:false
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
        .addCase(userActions.signToken.rejected, (state, action) => {
            return {
                ...state,
                load:false,
                error:true
            }
        }) 
})

export default userReducer