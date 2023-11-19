import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'


const About = () => {
  return (
    
    <div>
    <PortfolioNav />
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
        About Michael J Norris
    </Typography>
      <Typography
       sx={{
          textIndent: '3rem',
          fontFamily: 'verdana',
          fontSize: '1.2rem',
          mx: 'auto',
          marginTop: '1rem',
          marginBottom: '1rem',
          maxWidth: '90%'
       }}>
         I'm a software developer / sales engineer / project manager / tutor who thrives on working with others. Collaborating with people, getting the best results out of a team, facilitating cooperation, and finishing projects that serve the greater good are all things that get me fired up. 
         
         I love bridging the gaps between technology and people with empathy and communication while finding efficient solutions to complex problems.
        </Typography>
        <Typography
          sx={{
            textIndent: '3rem',
            fontFamily: 'verdana',
            fontSize: '1.3rem',
            mx: 'auto',
            marginTop: '1rem',
            marginBottom: '1rem',
            maxWidth: '95%'
          }}>
        Some of my personal highlights include:
          <ul>
            <li>Connecting with stakeholders to design and build the company's online presence, most notably their website with interactive product catalog.</li>

            <li>Facilitating the outfitting of HVAC product for high-end construction projects all throughout Boston.</li>

            <li>Tutoring 50+ students toward academic success, achieving a 90+% acceptance rate into the colleges of their choice.</li>

            <li>Presenting my computational chemistry research thesis at two American Chemical Society conferences.</li>

            <li>Leading a small team of software developers to finish our capstone project from Fullstack Academy and present a few days before my wedding.</li>

            <li>Creating and executing the itinerary, budget, and logistics of 2 trips around the world, once solo and another with my wife.</li>
          </ul>
        </Typography>
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
        Other hobbies of mine include: 
          <ul>
            <li>Playing the drums</li>
            <li>Hiking</li>
            <li>Travel</li>
            <li>Sports</li>
            <li>Painting</li>
            <li>Arts</li>
          </ul>
        Please reach out to talk about Javascript | React-Redux | HTML | CSS | SQL | Axios | Project Management | Technical Sales | Data Analysis | Education    
        </Typography>
        <FooterNav/>
    </div>
  )
}

export default About