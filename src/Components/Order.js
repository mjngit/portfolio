import React from 'react'
import { Typography } from '@mui/material'
import { useLocation, Link } from 'react-router-dom'

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Order = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <PortfolioNav/>
      <Typography
       sx={{
        textAlign: 'center',
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        fontWeight: '500',
        mx: 'auto',
        marginTop: '2rem',
        marginBottom: '1rem',
        maxWidth: '70%'
       }}>
        Thank you for your order!
        Your order number is {location.pathname.slice(7)}<br/>
        <Link to='/home'>Home</Link>
    </Typography>
    <FooterNav/>
    </div>
  )
      }

export default Order