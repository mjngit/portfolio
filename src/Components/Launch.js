import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuth } from '../store';
import { useNavigate, Link } from 'react-router-dom';

import { Typography } from '@mui/material';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';


const Launch = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  return (
    <div>
      <PortfolioNav/>
      {
        auth.id ? (
            <div>
                <div className="progress">
                <div className="circle done">
                  <span className="label">1</span>
                  <span className="title">Personal</span>
                </div>
                <span className="bar done"></span>
                <div className="circle done">
                  <span className="label">2</span>
                  <span className="title">Work</span>
                </div>
                <span className="bar done"></span>
                <div className="circle done">
                  <span className="label">3</span>
                  <span className="title">Financial</span>
                </div>
                <span className="bar done"></span>
                <div className="circle done">
                  <span className="label">4</span>
                  <span className="title">Finalize</span>
                </div>
              </div>
                <Link to={'/capstone/home'}><h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}> You did it! You created your account</h1></Link>
            
                <Typography>Go Home for market trends or search for stock by ticker</Typography>
                
            </div>
        
        )  : (
            <div>
                <h1>Can't Update If You're Not Logged In!</h1>
                <div>
                    <Link to={`/capstone/register`}>Register Here</Link> or <Link to='/capstone/login'> Login </Link>
                </div>
            </div>
          )
        } 
     <FooterNav/>
    </div>
  );
};

export default Launch;