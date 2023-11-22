import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutContact = () => {
  return (
    <div>
      <PortfolioNav/>
      <SubNavAbout/>

      

     
       <Typography
       sx={{
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        mx: 'auto',
        marginTop: '1rem',
        marginBottom: '25rem',
        maxWidth: '50%'
       }}>
        <h3>Please contact me at:</h3>
        <li style={{listStyleType: 'none'}}>Phone: <a href="tel:617-610-1869">617-610-1869</a></li>
        <li style={{listStyleType: 'none'}}>Email: <a href="mailto:mnorris6@elon.edu">mnorris6@elon.edu</a></li>
        </Typography>
       
        
        <FooterNav/>
    </div>
  )
}

export default AboutContact