import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'

const AboutContact = () => {
  return (
    <div>
      <SubNavAbout/>
       <Typography
       sx={{
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        mx: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '50%'
       }}>
        <h3>Please contact me at:</h3>
        <li style={{listStyleType: 'none'}}>Phone: <a href="tel:617-610-1869">617-610-1869</a></li>
        <li style={{listStyleType: 'none'}}>Email: <a href="mailto:mnorris6@elon.edu">mnorris6@elon.edu</a></li>
        </Typography>
    </div>
  )
}

export default AboutContact