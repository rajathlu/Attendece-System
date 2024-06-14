import React, { useState } from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {SignIn} from "./action";
import { useSelector, useDispatch } from "react-redux";



function Login() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  // const {
  //   items
  // } = useSelector((state)=>state.items);

  const items = useSelector((store)=>store.login);

  console.log(items,"items");


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleOnSave =(form)=>{
    console.log(form)
    dispatch(SignIn(form))

  }

  return (
    <div className='background'>
      <div className='login'>
        <div>
          <h2 className="loginHeader">Login</h2>
          <div className='loginUser' >
           
             <TextField
                        error={errors?.username ? true : false}
                        label="Username"
                        variant="outlined"
                        size="small"
                        fullWidth
                        {...register("username", {
                          required: true,
                          
                        })}
                       
                      />
                    
          </div>
          <div className='loginUser' >
          
             <TextField
                        error={errors?.password ? true : false}
                        label="Password"
                        variant="outlined"
                        type={passwordShown ? "text" : "password"}
                        //type="password"
                        size="small"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={togglePassword}
                                onMouseDown={togglePassword}
                                edge="end"
                              >
                                {passwordShown ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        {...register("password", {
                          required: true,
                        })}
                      />
          </div>
         
         
          <div className='loginUser' >

          <button className='loginButton ' onClick={handleSubmit(handleOnSave)}><span style={{color:"white"}} >Login</span></button></div>
        </div>
        

      </div>
    </div>
  )
}

export default Login
