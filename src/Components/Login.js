// import React, { useState } from 'react';
// import { attemptLogin } from '../store';
// import { useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const Login = ()=> {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: ''
//   });

//   const onChange = ev => {
//     setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
//   };

//   const login = (ev)=> {
//     ev.preventDefault();
//     dispatch(attemptLogin(credentials));
//     navigate('/home')
//   };
//   return (
//     <div id="login" style={{paddingTop: '1rem', backgroundColor:"#f5f5f5"}}>
//       <h1>Login</h1>
//       <form >
//         <TextField
//           label='username'
//           value = { credentials.username }
//           name = 'username'
//           onChange = { onChange }
//           />
//         <div style={{ marginBottom: 1 }}/>
//         <TextField
//         id="filled-password-input"
//           label='password'
//           name = 'password'
//           type="password"
//           value={ credentials.password }
//           onChange = { onChange }
//         />
//         <Button type="submit"
//         onClick={ login } style={{fontSize: "1.2rem"}}> 
//           Login
//         </Button>
//         <Button type="submit" style={{fontSize: "1.2rem"}}> 
//         <a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{ textDecoration: 'none'  }}>Login with Github</a>
//         </Button>
//       </form>
//       <div>
//           Not an existing customer? {' '}
//           <Link to={'/register'}>Create A New User</Link>
//         </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { googleOAuthLogin } from '../store';

const Login = ()=> {
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
    navigate('/');
  };
  return (
    <div>
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
  );
};

export default Login;

