import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Logout = ()=> {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _logout = (user) => {
        dispatch(logout(user))
        navigate('/')
    }

  return (
    <>
        <PortfolioNav/>
        <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}}>
            {
            auth.id ? (
                <div>
                    <h1>Logout</h1>
                    <div>
                        Are you sure you want to log out?
                        <Button variant="contained" onClick={(user)=> (_logout(user))}>Logout</Button>
                    </div>
                </div>
            
            )  : (
                <div>
                    <h1>You're Not Logged In!</h1>
                    <div>
                        <Link to={`/capstone/register`}>Register Here</Link> or <Link to='/capstone/login'> Login </Link>
                    </div>
                </div>
            )
            } 
        
        </div>
        <FooterNav/>
    </>
  );
};

export default Logout;