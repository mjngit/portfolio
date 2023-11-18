import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'


const About = () => {
  return (
    <div>

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

Connecting with stakeholders to design and build the company's online presence, most notably their website with interactive product catalog.

Facilitating the outfitting of HVAC product for high-end construction projects all throughout Boston.

Tutoring 50+ students toward academic success, achieving a 90+% acceptance rate into the colleges of their choice.

Presenting my computational chemistry research thesis at two American Chemical Society conferences.

Leading a small team of software developers to finish our capstone project from Fullstack Academy and present a few days before my wedding.

Creating and executing the itinerary, budget, and logistics of 2 trips around the world, once solo and another with my wife.
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
        Outside of work you will likely find me: traveling around looking for new hiking trails or musicians that will allow me to sit in on the drums

        Please reach out to talk about Javascript | React-Redux | HTML | CSS | SQL | Axios | Project Management | Technical Sales | Data Analysis | Education    
        </Typography>
    </div>
  )
}

export default About