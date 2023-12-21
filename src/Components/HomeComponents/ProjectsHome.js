import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import SubNavHome from './SubNavHome';
import { motion } from 'framer-motion';

import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'

function ProjectsHome() {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const [project, setProject] = useState('')
   

    const draw = {
      hidden: { pathLength: 0, opacity: 0},
      visible: (i) => {
        const delay = 1 + i;
        return {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: {delay, type: 'spring', duration: 3},
            opacity: { delay, duration: 0.01}
          }
        }
      }
    }

    const [projectImage, setProjectImage] = useState('')
    const [projectLink, setProjectLink] = useState('')
    const [projectImgTitle, setProjectImgTitle] = useState('')
    const [projectTitle, setProjectTitle] = useState('')
    const [projectLogline, setProjectLogline] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    

    const aITripPlanner = {
        img: '/static/images/trip-plannerNew.jpeg',
        link: '/stackathon/trip',
        img_title: 'trip-planner-thumbnail',
        title: 'AI Trip Planner',
        logline: 'Utilized an AI API to plan a trip and render the detailed schedule',
        description: `Pressed for time and don't have the money for a travel agent? Harness the Power of AI to plan your upcoming trip for you! It utilizes OpenAI's ChatGPT3.5 API to obtain data and relays them into easy to follow itineraries for your vacation.`
    }

    const aITripPlanButton = () => {
        setProjectImage(aITripPlanner.img)
        setProjectLink(aITripPlanner.link)
        setProjectImgTitle(aITripPlanner.img_title)
        setProjectTitle(aITripPlanner.title)
        setProjectLogline(aITripPlanner.logline)
        setProjectDescription(aITripPlanner.description)
    }

    const fights = {
        img: '/static/images/fighter-stats.jpeg',
        link: '/stackathon/fighters',
        img_title: 'fighter-stats-thumbnail',
        title: 'UFC Fighters of The Week Stat Tool',
        logline: 'I used the data from a many different UFC stat APIs to extract the data for each matchup and analysis to display most important info',
        description: `Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies! It utilizes a few different UFC stat API's according to UFCstats.com`
    }

    const fightButton = () => {
        setProjectImage(fights.img)
        setProjectLink(fights.link)
        setProjectImgTitle(fights.img_title)
        setProjectTitle(fights.title)
        setProjectLogline(fights.logline)
        setProjectDescription(fights.description)
    }

    const gift = {
        img: '/static/images/bday-presentNew.jpeg',
        link: '/stackathon/present',
        img_title: 'present-generator-thumbnail',
        title: 'GiftGenius AI',
        logline: `This is an AI Birthday Present Generator that uses Open AI's ChatGPT 3.5`,
        description: `Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!) It utilizes Open AI's ChatGPT 3.5 API`
    }

    const giftButton = () => {
        setProjectImage(gift.img)
        setProjectLink(gift.link)
        setProjectImgTitle(gift.img_title)
        setProjectTitle(gift.title)
        setProjectLogline(gift.logline)
        setProjectDescription(gift.description)
    }

    const sFJ = {
        img: '/static/images/SFJ-thumbnail.jpeg',
        link: '/java/home',
        img_title: 'coffee-company-thumbnail',
        title: 'Script For Java Coffee Shop',
        logline: 'This is a group project at Fullstack Academy where I led a team of 4 engineers to create an E-commerce website.',
        description: `Take a stroll through our E-commerce coffee shop. Have a look at all the coffees, smoothies, and other merchandise to fill your heart, and your cart!`
    }

    const sFJButton = () => {
        setProjectImage(sFJ.img)
        setProjectLink(sFJ.link)
        setProjectImgTitle(sFJ.img_title)
        setProjectTitle(sFJ.title)
        setProjectLogline(sFJ.logline)
        setProjectDescription(sFJ.description)
    }

    const trade = {
        img: '/static/images/capstone-thumbnail.jpeg',
        link: '/capstone/home',
        img_title: 'C-trade-thumbnail',
        title: 'C-Trade',
        logline: 'This is my capstone project from Fullstack Academy where I led a team of 3 engineers',
        description: `I worked with 2 other developers to design and build C-Trade, a trading community to research, discuss, buy, and sell stocks. I was the lead engineer and manager on this project.`
    }

    const tradeButton = () => {
        setProjectImage(trade.img)
        setProjectLink(trade.link)
        setProjectImgTitle(trade.img_title)
        setProjectTitle(trade.title)
        setProjectLogline(trade.logline)
        setProjectDescription(trade.description)
    }

    const happy = {
        img: '/static/images/happynotegrab.jpeg',
        link: '/portfolio/happyNotes',
        img_title: 'Happy Notes Thumbnail',
        title: 'Happy Notes',
        logline: 'This is a simple app to hopefully make your day a little brighter.',
        description: `Happy Notes is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times. You can also let fellow posters that their note brought you joy`
    }

    const happyButton = () => {
        setProjectImage(happy.img)
        setProjectLink(happy.link)
        setProjectImgTitle(happy.img_title)
        setProjectTitle(happy.title)
        setProjectLogline(happy.logline)
        setProjectDescription(happy.description)
    }

    useEffect(() => {
        sFJButton()
    }, [])
  
    return (
      <>
      <PortfolioNav/>
        <motion.div className='signature'>
        <motion.svg 
          width="729" 
          height="250" 
          viewBox="0 0 729 375" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path 
            className='sig-box'
            d="M40 42C40 40.8954 40.8954 40 42 40H687C688.105 40 689 40.8954 689 42V333C689 334.105 688.105 335 687 335H42C40.8954 335 40 334.105 40 333V42Z" 
            fill="#404040"/>
          <motion.path 
            d="M79.8656 121.138C97.5198 106.794 121.483 94.8448 143.359 88.7196C151.202 86.5235 181.848 77.9126 183.737 92.2683C185.277 103.972 172.528 116.288 166.09 124.686C153.934 140.542 140.481 155.245 126.478 169.477C115.482 180.653 100.929 193.03 95.4032 208.225C90.3646 222.081 108.495 197.955 111.9 194.797C148.929 160.462 184.69 125.656 227.089 97.8312C233.468 93.6452 244.981 86.1286 241.38 99.8453C233.812 128.676 202.042 148.253 184.601 171.107C178.9 178.577 173.28 186.401 168.775 194.51C167.09 197.543 168.936 195.465 170.789 194.318C180.447 188.339 189.082 179.932 197.644 172.546C225.367 148.632 253.358 127.832 285.595 110.3C286.646 109.728 310.944 97.2392 309.093 104.641C303.492 127.045 284.659 146.492 270.057 163.147C263.153 171.022 251.631 180.486 257.685 191.92C262.458 200.937 271.561 199.314 280.032 197.003C303.062 190.722 326.93 179.039 345.731 164.298C348.193 162.367 372.068 143.208 371.244 148.568C366.662 178.349 336.901 203.416 314.944 220.981C290.548 240.498 270.23 263.017 247.326 283.995C240.994 289.795 208.993 317.838 199.179 304.52C193.168 296.362 191.073 276.622 196.973 267.882C208.083 251.423 233.572 245.521 251.163 239.876C315.651 219.179 380.08 194.192 442.026 166.887C481.959 149.285 519.421 126.633 556.352 103.49C558.464 102.166 580.971 86.4166 572.465 93.707C542.351 119.519 511.538 144.503 481.445 170.34C465.437 184.085 449.751 198.328 434.065 212.445C426.897 218.897 419.261 227.679 409.992 231.244C406.905 232.431 411.395 229.821 412.102 229.133C423.687 217.853 434.699 206.015 446.054 194.51C480.362 159.751 523.465 138.521 570.355 126.317C583.761 122.828 596.78 117.685 610.734 117.685C616.78 117.685 607.259 129.407 606.609 130.441C593.897 150.677 576.906 166.842 560.188 183.672C549.909 194.02 540.03 204.65 531.223 216.281C531.053 216.506 524.147 224.53 528.25 224.53C539.276 224.53 553.273 214.819 562.49 209.855C591.2 194.396 619.705 178.99 647.851 162.571" 
            stroke="white" 
            strokeWidth="20" 
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path 
            d="M385.438 109.053V110.779" 
            stroke="white" 
            strokeWidth="20" 
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg>
  
        </motion.div>
  
        
         { (!auth.id) ? 
       (
        <div id="portfolio-home" style={{ padding: '20px', textAlign: 'center' }}>
       

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome to Michael Norris' Portfolio!</h2>
            <h4>Login (U: moe PW: 123) for full functionality</h4>
            <div style={{ marginBottom: '20px' }}>
              
  
              <div style={{ padding: '2rem'}}>
                <Link style={{ paddingRight: '8rem'}} to={`/capstone/register`}><button className="loginButton">Register</button></Link> 
              
                <Link to={`/capstone/login`}><button className="loginButton">Login</button></Link>
              </div>
  
              <div>
                
            </div>
            </div>
        
          </div>
  
          <div className='port-display-box' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', justifyContent: 'space-around' }}>

            {/* <div style={{display: 'flex', flexDirection: 'column', padding: '5rem'}}>
                <button className='but' style={{ padding: '2rem', background: 'blue', color: 'white'}} onClick={ ()=> aITripPlanButton() }>AI Trip Planner</button>    
                <button className='but' style={{ padding: '2rem'}} onClick={ ()=> fightButton() }>UFC By The Numbers</button> 
                <button className='but' style={{ padding: '2rem'}} onClick={ ()=> giftButton() }>Gift Genius</button> 
                <button className='but' style={{ padding: '2rem'}} onClick={ ()=> tradeButton() }>C-Trade</button> 
                <button className='but' style={{ padding: '2rem'}} onClick={ ()=> sFJButton() }>Script For Java</button>  
                <button className='but' style={{ padding: '2rem'}} onClick={ ()=> happyButton() }>Happy Notes</button>  
            </div> */}
        <div style={{display: 'flex', flexDirection: 'column', padding: '5rem'}}>
            <button className='but' onClick={ ()=> aITripPlanButton() }>
                <span class="span-mother">
                    <span>A</span>
                    <span>I</span>
                    <span>_</span>
                    <span>T</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>_</span>
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>n</span>
                    <span>n</span>
                    <span>e</span>
                    <span>r</span>
                </span>
                <span class="span-mother2">
                    <span>A</span>
                    <span>I</span>
                    <span>_</span>
                    <span>T</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>_</span>
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>n</span>
                    <span>n</span>
                    <span>e</span>
                    <span>r</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> fightButton() }>
                <span class="span-mother">
                    <span>U</span>
                    <span>F</span>
                    <span>C</span>
                    <span>_</span>
                    <span>B</span>
                    <span>y</span>
                    <span>_</span>
                    <span>T</span>
                    <span>h</span>
                    <span>e</span>
                    <span>_</span>
                    <span>N</span>
                    <span>u</span>
                    <span>m</span>
                    <span>b</span>
                    <span>e</span>
                    <span>r</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                <span>U</span>
                    <span>F</span>
                    <span>C</span>
                    <span>_</span>
                    <span>B</span>
                    <span>y</span>
                    <span>_</span>
                    <span>T</span>
                    <span>h</span>
                    <span>e</span>
                    <span>_</span>
                    <span>N</span>
                    <span>u</span>
                    <span>m</span>
                    <span>b</span>
                    <span>e</span>
                    <span>r</span>
                    <span>s</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> giftButton() }>
                <span class="span-mother">
                    <span>G</span>
                    <span>i</span>
                    <span>f</span>
                    <span>t</span>
                    <span>_</span>
                    <span>G</span>
                    <span>e</span>
                    <span>n</span>
                    <span>i</span>
                    <span>u</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                    <span>G</span>
                    <span>i</span>
                    <span>f</span>
                    <span>t</span>
                    <span>_</span>
                    <span>G</span>
                    <span>e</span>
                    <span>n</span>
                    <span>i</span>
                    <span>u</span>
                    <span>s</span>
                </span>
            </button>   

            <button className='but' onClick={ ()=> tradeButton() }>
                <span class="span-mother">
                    <span>C</span>
                    <span>-</span>
                    <span>T</span>
                    <span>r</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                </span>
                <span class="span-mother2">
                    <span>C</span>
                    <span>-</span>
                    <span>T</span>
                    <span>r</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                </span>
            </button> 

            <button className='but' onClick={ ()=> sFJButton() }>
                <span class="span-mother">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>t</span>
                    <span>_</span>
                    <span>F</span>
                    <span>o</span>
                    <span>r</span>
                    <span>_</span>
                    <span>J</span>
                    <span>a</span>
                    <span>v</span>
                    <span>a</span>
                </span>
                <span class="span-mother2">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>t</span>
                    <span>_</span>
                    <span>F</span>
                    <span>o</span>
                    <span>r</span>
                    <span>_</span>
                    <span>J</span>
                    <span>a</span>
                    <span>v</span>
                    <span>a</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> happyButton() }>
                <span class="span-mother">
                    <span>H</span>
                    <span>a</span>
                    <span>p</span>
                    <span>p</span>
                    <span>y</span>
                    <span>_</span>
                    <span>N</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                    <span>H</span>
                    <span>a</span>
                    <span>p</span>
                    <span>p</span>
                    <span>y</span>
                    <span>_</span>
                    <span>N</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>s</span>
                </span>
            </button>
        </div>


        
              <article className="bigcard">
                  <Link to={projectLink}>
                    <CardMedia
                      sx={{ height: 850,
                    width: 800 }}
                      image={projectImage}
                    title={projectImgTitle}
                    />
                  </Link>
                  <div className="bigcard_content">
                      <span className="bigcard_title">{projectTitle}</span>
                          <span className="bigcard_subtitle pb-5"> {projectLogline} </span>
                          <p className="bigcard_description"> {projectDescription} </p>
                      
                  </div>
                </article>
            
              
  
          </div>
          
  
        </div>
  
          )  : (
  
        <div id="portfolio-home" style={{ padding: '20px', textAlign: 'center' }}>
       

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome {auth.username}!</h2>
            <div style={{ marginBottom: '20px' }}>
              
  
             
  
              <div>
                
            </div>
            </div>
        
          </div>
  
          <div className='port-display-box' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', justifyContent: 'space-around' }}>

           

        

            {/* <div style={{display: 'flex', flexDirection: 'column', padding: '5rem'}}>
                <Button style={{ padding: '2rem', background: 'blue', color: 'white'}} onClick={ ()=> aITripPlanButton() }>AI Trip Planner</Button>    
                <Button style={{ padding: '2rem'}} onClick={ ()=> fightButton() }>UFC By The Numbers</Button> 
                <Button style={{ padding: '2rem'}} onClick={ ()=> giftButton() }>Gift Genius</Button> 
                <Button style={{ padding: '2rem'}} onClick={ ()=> tradeButton() }>C-Trade</Button> 
                <Button style={{ padding: '2rem'}} onClick={ ()=> sFJButton() }>Script For Java</Button>  
                <Button style={{ padding: '2rem'}} onClick={ ()=> happyButton() }>Happy Notes</Button>  
            </div> */}

        <div style={{display: 'flex', flexDirection: 'column', padding: '5rem'}}>
            <button className='but' onClick={ ()=> aITripPlanButton() }>
                <span class="span-mother">
                    <span>A</span>
                    <span>I</span>
                    <span>_</span>
                    <span>T</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>_</span>
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>n</span>
                    <span>n</span>
                    <span>e</span>
                    <span>r</span>
                </span>
                <span class="span-mother2">
                    <span>A</span>
                    <span>I</span>
                    <span>_</span>
                    <span>T</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>_</span>
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>n</span>
                    <span>n</span>
                    <span>e</span>
                    <span>r</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> fightButton() }>
                <span class="span-mother">
                    <span>U</span>
                    <span>F</span>
                    <span>C</span>
                    <span>_</span>
                    <span>B</span>
                    <span>y</span>
                    <span>_</span>
                    <span>T</span>
                    <span>h</span>
                    <span>e</span>
                    <span>_</span>
                    <span>N</span>
                    <span>u</span>
                    <span>m</span>
                    <span>b</span>
                    <span>e</span>
                    <span>r</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                <span>U</span>
                    <span>F</span>
                    <span>C</span>
                    <span>_</span>
                    <span>B</span>
                    <span>y</span>
                    <span>_</span>
                    <span>T</span>
                    <span>h</span>
                    <span>e</span>
                    <span>_</span>
                    <span>N</span>
                    <span>u</span>
                    <span>m</span>
                    <span>b</span>
                    <span>e</span>
                    <span>r</span>
                    <span>s</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> giftButton() }>
                <span class="span-mother">
                    <span>G</span>
                    <span>i</span>
                    <span>f</span>
                    <span>t</span>
                    <span>_</span>
                    <span>G</span>
                    <span>e</span>
                    <span>n</span>
                    <span>i</span>
                    <span>u</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                    <span>G</span>
                    <span>i</span>
                    <span>f</span>
                    <span>t</span>
                    <span>_</span>
                    <span>G</span>
                    <span>e</span>
                    <span>n</span>
                    <span>i</span>
                    <span>u</span>
                    <span>s</span>
                </span>
            </button>   

            <button className='but' onClick={ ()=> tradeButton() }>
                <span class="span-mother">
                    <span>C</span>
                    <span>-</span>
                    <span>T</span>
                    <span>r</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                </span>
                <span class="span-mother2">
                    <span>C</span>
                    <span>-</span>
                    <span>T</span>
                    <span>r</span>
                    <span>a</span>
                    <span>d</span>
                    <span>e</span>
                </span>
            </button> 

            <button className='but' onClick={ ()=> sFJButton() }>
                <span class="span-mother">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>t</span>
                    <span>_</span>
                    <span>F</span>
                    <span>o</span>
                    <span>r</span>
                    <span>_</span>
                    <span>J</span>
                    <span>a</span>
                    <span>v</span>
                    <span>a</span>
                </span>
                <span class="span-mother2">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>i</span>
                    <span>p</span>
                    <span>t</span>
                    <span>_</span>
                    <span>F</span>
                    <span>o</span>
                    <span>r</span>
                    <span>_</span>
                    <span>J</span>
                    <span>a</span>
                    <span>v</span>
                    <span>a</span>
                </span>
            </button>

            <button className='but' onClick={ ()=> happyButton() }>
                <span class="span-mother">
                    <span>H</span>
                    <span>a</span>
                    <span>p</span>
                    <span>p</span>
                    <span>y</span>
                    <span>_</span>
                    <span>N</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>s</span>
                </span>
                <span class="span-mother2">
                    <span>H</span>
                    <span>a</span>
                    <span>p</span>
                    <span>p</span>
                    <span>y</span>
                    <span>_</span>
                    <span>N</span>
                    <span>o</span>
                    <span>t</span>
                    <span>e</span>
                    <span>s</span>
                </span>
            </button>
        </div>


        
              <article className="bigcard">
                  <Link to={projectLink}>
                    <CardMedia
                      sx={{ height: 850,
                    width: 800 }}
                      image={projectImage}
                    title={projectImgTitle}
                    />
                  </Link>
                  <div className="bigcard_content">
                      <span className="bigcard_title">{projectTitle}</span>
                          <span className="bigcard_subtitle pb-5"> {projectLogline} </span>
                          <p className="bigcard_description"> {projectDescription} </p>
                      
                  </div>
                </article>
            
              
  
          </div>
          
  
        </div>
      
          )
          } 
  
      <FooterNav/>
      </>
    );
  };
  

export default ProjectsHome
