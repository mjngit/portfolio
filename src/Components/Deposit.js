import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateAuth } from '../store';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Deposit = ()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [tradingFunds, setTradingFunds] = useState(0)
  const { auth } = useSelector(state => state);

//   const deposit = async(ev)=> {
//     ev.preventDefault();
//     setTradingFunds(tradingFunds + depositFunds)
//     dispatch(updateAuth({ tradingFunds }));
//     navigate('/home')
//   };
// set states are weird, happens after function ends, cant set state and immediately 

  const deposit = async(ev)=> {
    ev.preventDefault();
    const updatedTradingFunds = Number(auth.tradingFunds) + Number(tradingFunds)
    dispatch(updateAuth({ tradingFunds: updatedTradingFunds }));
    navigate('/capstone/home')
  };


  return (
    <div>
      <PortfolioNav/>
      <h2 style={{display: 'flex', justifyContent:'center'}}>Deposit Funds</h2>
      <div style={{padding: '2rem', display: 'flex', justifyContent:'center'}}>
      <form>

       <TextField  label="Deposit Funds For Trading" variant='filled' value={ tradingFunds } onChange={ev => setTradingFunds(ev.target.value)}  />
       <Button style={{ width: 400 }} onClick={ deposit } disabled={ !tradingFunds }>Deposit</Button>

        <div style={{ padding: '8rem', display: 'flex', justifyContent:'center'}}>
          <Link to={`/capstone/register`}><button className="loginButton"> Not a Member? Register Here</button></Link> 
        </div>               
      </form>
      </div>
      <FooterNav/>
    </div>
  );
};

export default Deposit;