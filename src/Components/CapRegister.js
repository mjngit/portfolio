
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  register } from '../store';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { googleOAuthLogin } from '../store';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const CapRegister = ()=> {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _register = async(ev)=> {
    ev.preventDefault();
    const credentials = {
      username,
      password
    };

    try {
      dispatch(register(credentials));
      navigate('/capstone/accountSetup');
    }
    catch(ex){
      console.log(ex)
    }
  };
  return (
    <>
    <PortfolioNav/>
    {/* <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    <form onSubmit={ _register }>
        <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Registration</h1>
            <div style={{ marginBottom: 16 }}/>
        <TextField style={{ width: 300 }} label="Username" name = 'username' variant="outlined" value={ username } onChange={ev => setUsername(ev.target.value)} />
            <div style={{ marginBottom: 4 }}/>
        <TextField type='password' style={{ width: 300 }} label="Password" name = 'password' variant="outlined" value={ password } onChange={ev => setPassword(ev.target.value)} />

        <Button style={{ width: 300 }} onClick={ _register } disabled={ !username || !password}>Register</Button>
    </form>
    </div> */}


    <div className='flex justify-center pt-20'>
        <div className=" px-8 py-6 rounded-lg bg-gray-800 w-72">
          <h1 className="text-center font-bold text-3xl text-white">Register</h1>
          <form onSubmit={ _register } className="my-6">
            <TextField label="Username" name = 'username' variant="filled" value={ username } onChange={ev => setUsername(ev.target.value)} className='bg-white'/>

            <TextField type='password' label="Password" name = 'password' variant="filled" value={ password } onChange={ev => setPassword(ev.target.value)}  className='bg-white'/>
              {/* <GoogleOAuthProvider clientId = "18136828756-l5ol7p0u1f928hapfa4fr3pubvclahje.apps.googleusercontent.com">

                <GoogleLogin
                  style={{paddingLeft: 200}}
                  onSuccess={credentialResponse => {
                  const decoded = jwt_decode(credentialResponse.credential);
                  dispatch(googleOAuthLogin(decoded));
                  navigate('/capstone/home');

                }}
                  onError={() => {
                  console.log('Login Failed');
                }}
                />
              </GoogleOAuthProvider> */}
            <button disabled={ !password || !username } className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Register</button>
          </form>
        </div>
      </div>
    <FooterNav/>
    </>
  );
};

export default CapRegister;