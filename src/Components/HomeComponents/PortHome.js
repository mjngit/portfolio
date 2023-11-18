import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import SubNavHome from './SubNavHome';
import { motion } from 'framer-motion';


const PortHome = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
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

  return (
    <>
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
      // <div id="portfolio-home">   

      //   <div> 
      //     <h2>Welcome to My Portfolio!</h2>
      //     <div className='center'>
      //       <Button variant='outlined'><Link to={`/capstone/register`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Register Here </Link></Button>  or  <Button variant='outlined'> <Link to='/capstone/login' style={{fontSize: '1.2rem', fontWeight:'500'}}> Login </Link></Button>
      //     </div>
      //   <h4 className='center'>Have a look at a few of my projects! An Ecommerce Platform, a Stock Trading App, and an AI and UFC Stat tool!</h4>
      //   </div>
      //   <div className='port-display-box'>
      <div id="portfolio-home" style={{ padding: '20px', textAlign: 'center' }}>

        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome to My Portfolio!</h2>
          <div style={{ marginBottom: '20px' }}>
            <Button variant='outlined' style={{ fontSize: '1.2rem', fontWeight: '500', marginRight: '10px' }}>
              <Link to={`/capstone/register`}>Register Here</Link>
            </Button>
            <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>or</span>
            <Button variant='outlined' style={{ fontSize: '1.2rem', fontWeight: '500', marginLeft: '10px' }}>
              <Link to='/capstone/login'>Login</Link>
            </Button>
          </div>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Have a look at a few of my projects! An Ecommerce Platform, a Stock Trading App, and an AI and UFC Stat tool!
          </h4>
        </div>

        <div className='port-display-box' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                  
            <Card 
              sx={{ 
                maxWidth: 375,
                ':hover':{
                  boxShadow: 5
                },
                display: 'flex', 
                flexDirection: 'column',
                margin: 2
                }}
            >
              <Link to='/stackathon/trip'>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/trip-planner.jpeg"
                title="trip-planner-thumbnail"
              />
              </Link>
              <CardContent> 
                <Typography gutterBottom variant="h5" component="div">
                  AI Trip Planner
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pressed for time and don't have the money for a travel agent? Harness the Power of AI to plan your upcoming trip for you!
                </Typography>
              </CardContent>
             
            </Card>
         
        
            <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2
              }}
             >
              <Link to='/stackathon/fighters'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/fighter-stats.jpeg"
                  title="fighter-stats-thumbnail"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  UFC Fighters of The Week Stat Tool
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies!
                </Typography>
              </CardContent>
            </Card>
          
            <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2 
              }}
             >
              <Link to='/stackathon/present'>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/bday-present.jpeg"
                title="present-generator-thumbnail"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  AI Birthday Present Generator
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!)
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2
              }}
             >
              <Link to='/java/home'>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/SFJ-thumbnail.jpeg"
                title="coffee-company-thumbnail"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Script for Java Coffee Shop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is my first group project at Fullstack Academy where we made an E-commerce website. Have a look at our products and fill your cart!
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2 
              }}
             >
              <Link to='/capstone/home'>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/capstone-thumbnail.jpeg"
                title="C-trade-thumbnail"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Capstone: C-Trade
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is my capstone project where I worked with 2 other people to design and build a trading community to research, discuss, buy, and sell stocks. I was the lead engineer on this project.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2 
              }}
             >
              <Link to='/portfolio/happyNotes'>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/happynotegrab.jpeg"
                title="Happy Notes Thumbnail"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Happy Notes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times
                </Typography>
              </CardContent>
            </Card>
        </div>
        

      </div>

        )  : (

        <div id="homepage">           
          <h1>Welcome, {auth.username}!</h1>
          <div>

              Have a look at a few of my projects! An Ecommerce Platform, a Stock Trading App, and an AI and UFC Stat tool!

          </div>
          <div className='port-display-box'>
            
              <Card 
                sx={{ 
                  maxWidth: 375,
                  ':hover':{
                    boxShadow: 5
                  },
                  display: 'flex', 
                  flexDirection: 'column',
                  margin: 2
                  }}
              >
                <Link to='/stackathon/trip'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/trip-planner.jpeg"
                  title="trip-planner-thumbnail"
                />
                </Link>
                <CardContent> 
                  <Typography gutterBottom variant="h5" component="div">
                    AI Trip Planner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pressed for time and don't have the money for a travel agent? Harness the Power of AI to plan your upcoming trip for you!
                  </Typography>
                </CardContent>
               
              </Card>
           
          
              <Card sx={{ 
                maxWidth: 375,
                ':hover':{
                  boxShadow: 5
                },
                display: 'flex', 
                flexDirection: 'column',
                margin: 2
                }}
               >
                <Link to='/stackathon/fighters'>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/fighter-stats.jpeg"
                    title="fighter-stats-thumbnail"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    UFC Fighters of The Week Stat Tool
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies!
                  </Typography>
                </CardContent>
              </Card>
            
              <Card sx={{ 
                maxWidth: 375,
                ':hover':{
                  boxShadow: 5
                },
                display: 'flex', 
                flexDirection: 'column',
                margin: 2
                }}
               >
                <Link to='/stackathon/present'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/bday-present.jpeg"
                  title="present-generator-thumbnail"
                />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    AI Birthday Present Generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!)
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ 
                maxWidth: 375,
                ':hover':{
                  boxShadow: 5
                },
                display: 'flex', 
                flexDirection: 'column',
                margin: 2
                }}
               >
                <Link to='/java/home'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/SFJ-thumbnail.jpeg"
                  title="coffee-company-thumbnail"
                />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Script for Java Coffee Shop
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is my first group project at Fullstack Academy where we made an E-commerce website. Have a look at our products and fill your cart!
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ 
                maxWidth: 375,
                ':hover':{
                  boxShadow: 5
                },
                display: 'flex', 
                flexDirection: 'column',
                margin: 2
                }}
               >
                <Link to='/capstone/home'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/capstone-thumbnail.jpeg"
                  title="C-trade-thumbnail"
                />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Capstone: C-Trade
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is my capstone project where I worked with 2 other people to design and build a trading community to research, discuss, buy, and sell stocks. I was the lead engineer on this project.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ 
              maxWidth: 375,
              ':hover':{
                boxShadow: 5
              },
              display: 'flex', 
              flexDirection: 'column',
              margin: 2 
              }}
             >
                <Link to='/portfolio/happyNotes'>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/happynotegrab.jpeg"
                  title="Happy Notes Thumbnail"
                />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Happy Notes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times
                  </Typography>
                </CardContent>
              </Card>
          </div>
        </div>
    
        )
        } 

  
    </>
  );
};

export default PortHome;
