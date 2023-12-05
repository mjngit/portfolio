import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { googleOAuthLogin } from '../store';
import PortfolioNav from './PortfolioNav';
import FooterNav from './FooterNav';

const CapLogin = ()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
    navigate('/capstone/home');
  };
  return (
    <>
      <PortfolioNav/>
     
      <div className='flex justify-center pt-20' style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem'}}>
        <div className=" px-8 py-6 rounded-lg bg-gray-800 w-72" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', width: '18rem', backgroundColor: 'gray'}}>
          <h1 className="text-center font-bold text-3xl text-white" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.875rem', lineHeight: '2.25rem' }}>Login</h1>
          <form onSubmit={ login } className="my-6" style={{ marginTop: '1.5rem', marginBottom: '1.5rem'}}>
            <TextField label="Username" name = 'username' variant="filled" value={ credentials.username } onChange={onChange} className='bg-white' style={{ backgroundColor: 'white'}}/>

            <TextField type='password' label="Password" name = 'password' variant="filled" value={ credentials.password } onChange={onChange} className='bg-white' style={{ backgroundColor: 'white'}}/>
              <GoogleOAuthProvider clientId = "18136828756-l5ol7p0u1f928hapfa4fr3pubvclahje.apps.googleusercontent.com">

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
              </GoogleOAuthProvider>
            <button disabled={ !credentials } className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
            style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '.5rem', marginTop: '.75rem', borderRadius: '.5rem'}}>Login</button>
            <div className='flex justify-center text-white' style={{ display: 'flex', justifyContent: 'center', color: 'white'}}><Link to={'/capstone/register'}>Register</Link></div>
            <div className='flex justify-center text-white' style={{ display: 'flex', justifyContent: 'center', color: 'white'}}>Or Use: moe | 123</div>
          </form>
        </div>
      </div>
      <div  className='py-36' style={{ paddingTop: '12rem'}}></div>
      <FooterNav/>
    </>
  );
};

export default CapLogin;







 {/* <div>
        <h2 style={{display: 'flex', justifyContent:'center'}}>Login</h2>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <form onSubmit={ login } >
        <TextField label="Username" name = 'username' variant="outlined" value={ credentials.username } onChange={onChange} style={{display: 'flex', justifyContent:'center', width: 300 }}/>
        <div style={{ marginBottom: 8 }}/>

        <TextField type='password' label="Password" name = 'password' variant="outlined" value={ credentials.password } onChange={onChange} style={{display: 'flex', justifyContent:'center', width: 300 }}/>
        <GoogleOAuthProvider clientId = "18136828756-l5ol7p0u1f928hapfa4fr3pubvclahje.apps.googleusercontent.com">

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
        </GoogleOAuthProvider>
        <Button style={{ width: 300 }} onClick={ login } disabled={ !credentials }>Login</Button>

      
          <Link style={{ paddingLeft: 15}}to={`/capstone/register`} >Not a Member? Register Here</Link>
        </form>
        </div>

       
      </div>       
        <div className=" px-8 py-6 rounded-lg bg-gray-800 w-72">
          <h1 className="text-center font-bold text-3xl text-white">Login</h1>
          <form className="my-6">
            <input  value={ credentials.username } onChange={onChange} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Username" type="text" />
            
            <input value={ credentials.password } onChange={onChange} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Password" type="password" />
              <GoogleOAuthProvider clientId = "18136828756-l5ol7p0u1f928hapfa4fr3pubvclahje.apps.googleusercontent.com">

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
              </GoogleOAuthProvider>
            <button onClick={ login } disabled={ !credentials } className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Login</button>
          </form>
        </div> */}