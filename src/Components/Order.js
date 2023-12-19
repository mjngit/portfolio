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
        marginTop: '6rem',
        marginBottom: '1rem',
        maxWidth: '70%'
       }}>
        Thank you for your order!
        Your order number is {location.pathname.slice(12)}<br/>

        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10rem', paddingBottom: '10rem', left: '5%' }}>
                  
                  <div>
                    <Link to={`/java/home`}><button className="loginButton">Script For Java</button></Link> 
                  </div>

                  <div>
                    <Link to={`/`}><button className="loginButton">Portfolio Home</button></Link>
                  </div>

                  <div>
                    <Link to={`/portfolio/home`}><button className="loginButton">More Projects</button></Link>
                  </div>
        </div>
    </Typography>
    <div style={{ paddingTop: '10rem'}}></div>
    <FooterNav/>
    </div>
  )
      }

export default Order