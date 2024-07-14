import { createSlice } from '@reduxjs/toolkit';



export const LoginStatusSlice=createSlice({
    name:"LoginStatus",
    initialState:{
        isLoggedIn: false
    },
    reducers:{
        login : (state) =>{
            state.isLoggedIn = true;
        },
        logout: (state) =>{
            state.isLoggedIn = false;
        }
    }
})
export const {login,logout}=LoginStatusSlice.actions
export default LoginStatusSlice.reducer