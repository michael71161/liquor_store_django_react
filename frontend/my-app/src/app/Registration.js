import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doSigninAsync, selectEmail,selectUserName,selectToken, doSignupAsync } from './loginSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
const Registration = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    const [newUserName, setNewUserName] = useState("")
    const [newPwd, setNewPwd] = useState("")
    const [confPWD, setconfPWD] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const notify = () => toast.success("registration completed, go to Log in in the navbar");
    // const disp =() => {
    //      let f1 = dispatch(doSignupAsync({ username: newUserName, password: newPwd, email: newEmail }));
    //     let f2 = dispatch(doSigninAsync({ username: newUserName, password: newPwd }));
    // }
    


  return (
    <div align="center">
        
            <hr />
            <form align="center">
            
            Username <br></br>  <input  placeholder="Enter Username" onChange={(e) => setNewUserName(e.target.value)} /><br></br>
            Password <br></br> <input  placeholder="Enter Password"onChange={(e) => setNewPwd(e.target.value)} type='password' /><br></br>
            Confirm password <br></br> <input placeholder="Confirm Password" onChange={(e) => setNewPwd(e.target.value)} type='password' /><br></br>
            Email <br></br> <input placeholder="Enter Email" onChange={(e) => setconfPWD(e.target.value)} /><br></br>
            {!token && <Button variant= "contained" color="success" onClick={() => {notify();dispatch(doSignupAsync({ username: newUserName, password: newPwd, email: newEmail }),doSigninAsync({ username: newUserName, password: newPwd }))}}>Register</Button>}
            </form>
            <ToastContainer  position="top-center" autoClose={2500} />
            
        </div>
  )
}

export default Registration