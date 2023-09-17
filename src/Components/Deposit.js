import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateAuth } from '../store';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <h2 style={{display: 'flex', justifyContent:'center'}}>Deposit Funds</h2>
      <div style={{display: 'flex', justifyContent:'center'}}>
      <form>
     
      {/* <TextField  label="Add to Funds For Trading" variant="outlined" value={ depositFunds } onChange={ev => setDepositFunds(ev.target.value)}  style={{width: 300}}/>
      <Button style={{ width: 300 }} onClick={ deposit } disabled={ !depositFunds }>Deposit</Button> */}

       <TextField  label="Deposit Funds For Trading" variant="outlined" value={ tradingFunds } onChange={ev => setTradingFunds(ev.target.value)}  />
       <Button style={{ width: 400 }} onClick={ deposit } disabled={ !tradingFunds }>Deposit</Button>
      

    
        <Link style={{ paddingLeft: 65}} to={`/register`} >Not a Member? Register Here</Link>
      </form>
      </div>
    </div>
  );
};

export default Deposit;