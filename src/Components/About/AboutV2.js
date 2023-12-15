import React, { useEffect, useState, useRef } from 'react'
import { Button, Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'
import { Link } from 'react-router-dom'

import ReactSwipe from 'react-swipe';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';

// import { Navigation } from 'swiper/modules';

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const AboutV2 = () => {

    let currentImageIndex = 0;
    const carouselImages = document.querySelectorAll(".carousel-image");
    setInterval(() => {
        carouselImages[currentImageIndex].classList.add('hidden')
        currentImageIndex += 1
        if(currentImageIndex === 12){
            currentImageIndex = 0
        }
        carouselImages[currentImageIndex].classList.remove('hidden')
        
    }, 3500);  
    
    const sliderRef = useRef(null);
    const scrollAmount = 400;

    const images = [
        {
          id: 1,
          url: "static/images/capri-boat.jpeg"
        },
        {
          id: 2,
          url: "static/images/lombok.jpeg"
        },
        {
          id: 3,
          url: "static/images/chiang-mai.jpeg"
        },
        {
          id: 4,
          url: "static/images/montenegro.jpeg"
        },
        {
          id: 5,
          url: "static/images/lake-bled"
        },
        {
          id: 6,
          url:
            "static/images/rafting.jpeg"
        },
        {
          id: 7,
          url:
            "static/images/wedding.jpeg"
        },
        {
          id: 8,
          url:
            "static/images/moto.jpeg"
        },
        {
          id: 9,
          url:
            "static/images/surfer.jpeg"
        },
        {
          id: 10,
          url:
            "static/images/waterfall.jpeg"
        },
        {
          id: 11,
          url:
            "static/images/waterfallnz.jpeg"
        },
        {
          id: 12,
          url:
            "static/images/ice.jpeg"
        },
        {
          id: 13,
          url:
            "static/images/auspillars.jpeg"
        },
      ];


 
const Carousel = () => {
  let reactSwipeEl;
 
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
               
        <div> <img  src="static/images/chiang-mai.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        <div> <img  src="static/images/montenegro.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        <div> <img  src="static/images/lake-bled.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        <div> <img  src="static/images/rafting.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        {/* <div> <img  src="static/images/wedding.jpeg" style={{height: '30rem', width: '55rem'}} /></div> */}
        {/* <div> <img  src="static/images/moto.jpeg" style={{height: '30rem', width: '55rem'}} /></div> */}
        <div> <img  src="static/images/surfer.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        {/* <div> <img  src="static/images/waterfall.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        <div> <img  src="static/images/waterfallnz.jpeg" style={{height: '30rem', width: '55rem'}} /></div> */}
        <div> <img  src="static/images/ice.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        {/* <div> <img  src="static/images/auspillars.jpeg" style={{height: '30rem', width: '55rem'}} /></div> */}
        <div> <img  src="static/images/lombok.jpeg" style={{height: '30rem', width: '55rem'}} /></div>
        <div><img src="static/images/capri-boat.jpeg" style={{height: '30rem', width: '55rem'}}/></div>  
      </ReactSwipe>
       
        {/* <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        <button onClick={() => reactSwipeEl.next()}>Next</button> */}

        <Button onClick={() => reactSwipeEl.prev()}>Previous</Button>
        <Button onClick={() => reactSwipeEl.next()}>Next</Button>
    </div>
  );
};
     
  return (

   
    
    <div>
    <PortfolioNav />

    <div className="container mx-auto space-y-16" style={{ paddingTop: '1rem', paddingBottom: '1rem'}}>
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5" style={{ display: 'grid', gap: '.75rem', textAlign: 'center', gridTemplateColumns: '30rem 70rem',  }}>
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900" style={{ width: '100%', padding: '.75rem', borderRadius: '.5rem', backgroundColor: 'darkblue'}}>
						<span className="block mb-2 dark:text-lime-400" style={{display: 'block', marginTop: '10rem', marginBottom: '1rem', color: 'lime'}}>The Life of</span>
						<h1 className="text-5xl font-extrabold dark:text-gray-50" style={{ fontSize: '2.75rem', lineHeight: '3rem', fontWeight: 'bold', color: 'lightgray' }}>Michael Norris</h1>
						<p className="my-8" style={{ marginTop: '2rem', marginBottom: '2rem'}}>
							<span className="font-medium dark:text-gray-50" style={{ fontWeight: '500', color: 'lightgray' }}>Adventurer, Developer, Project Manager, Sales Engineer</span>
						</p>
                        <div className='flex items-center justify-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a rel="noopener noreferrer" href="https://github.com/mjngit" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '5rem', backgroundColor: 'lime' , padding: '30px'}}>
                                <GitHubIcon />
                            </a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mike-j-norris/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '5rem', backgroundColor: 'lime', padding: '30px'}}>
                                <LinkedInIcon />
                            </a>
                            <button rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '5rem', backgroundColor: 'lime' , padding: '30px'}}>
                                <GoogleIcon />  
                            </button>
                        </div>
					</div>
					
                    {/* <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image" src="static/images/capri-boat.jpeg" style={{ classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/chiang-mai.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/montenegro.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/lake-bled.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/rafting.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/wedding.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/moto.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/surfer.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/waterfall.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/waterfallnz.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/ice.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/auspillars.jpeg"style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}} />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/lombok.jpeg" style={{classList: 'hidden', objectFit: 'cover', width: '100%', height: '100%'}}/> */}
{/* 
                    <div className="imgCarousel" style={{ height: '70rem', width: '45rem'}}>
                        <button
                            className="nav-btn"
                            onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft -= scrollAmount;
                            }}
                        > 
                            <ChevronLeftIcon />
                        </button>
                        <div className="images-container" ref={sliderRef}>
                            {images.map((image) => {
                            return (
                                <img
                                className="image"
                                alt="sliderImage"
                                key={image?.id}
                                src={image?.url}
                                />
                            );
                            })}
                        </div>
                        <button
                            className="nav-btn"
                            onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft += scrollAmount;
                            }}
                        >
                            <ChevronRightIcon />
                        </button>
                    </div> */}
                        <div style={{ height: '30rem', width: '45rem'}}>
                            <Carousel  />
                        </div>
                </section>
        </div>


        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto" style={{ maxWidth: '64rem', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '4rem', paddingBottom: '4rem', }}>
                <div className="grid gap-4 mx-4 sm:grid-cols-12" style={{ display: 'grid', gap: '1rem', marginLeft: '1rem', marginRight: '1rem', gridTemplateColumns: '400px 1000px'}}>
                    <div className="col-span-12 sm:col-span-3" style={{ gridTemplateColumns: '250px 750px' }}>
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-lime-400" style={{textAlign: 'center', marginBottom: '3.5rem', }}>
                            <h3 className="text-3xl font-semibold" style={{ fontSize: '1.875rem', lineHeight:'2.25rem' }}>Major Events</h3>
                            <span className="text-sm font-bold tracki uppercase dark:text-gray-400" style={{width: '200px', fontSize: '0.875rem', lineHeight:'1.25rem' }}>Key Moments & Achievements</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9" style={{ position: 'relative', paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1.5rem', borderLeft: '5px'}}>
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-1.5 before:dark:bg-gray-700 before:bg-gray-700" style={{ position: 'relative', paddingLeft: '1rem', paddingRight: '1rem'}}>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Elon University</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>January 2010</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Was chosen to be an Organic Chemistry Teaching Assistant where I led office hours and lab, graded assignments, and mentored students.</p>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>This led me to begin my undergraduate research thesis in computational chemistry, I was able to hone my love of data analytics by studying the age old relationship between resonance vs. inductive effects on hydrogen bonding using computational models to analyze complex data.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Boston Children's Hospital</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>January 2014</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Assisted research in the pain department for a new anesthetic hoping to alleviate nausea rates during longer surgeries</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>World Tour #1</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>January 2017</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Planned and executed a 10 month solo trip around the world (India to Southeast Asia to Australia to New Zealand to Chile) on a tight budget</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Northeast Air Solutions</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>July 2018</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Started as a Sales Engineer for a manufacturer's representative in the HVAC industry in Boston. Sold many different technical products and helped mechanical engineers and sheetmetal contractors complete construction projects. Gave presentations to engineers on innovative technologies to develop new business and built relationships with existing business accounts as well.   </p>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Promoted to Head of Media and Marketing where along with keeping up my existing accounts and projects, I was in charge of creating the website and online presence of the company and attending conferences and trade shows as the representative of the company.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>ModernGrid</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>April 2022</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Developed new business as the sole BDR for the team where I also assisted in building out their sales pipeline and onboarding materials </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Fullstack Academy</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>November 2022</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Began working towards Fullstack Academy's Software Engineering Bootcamp Certification, building apps with React, Redux, Express, Node, and PostgreSQL. </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Script for Java</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>April 2023</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Worked with 3 other developers to create an e-commerce website for a fictional coffee shop <Link to="/java/home">Script For Java</Link>  </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>Stackathon</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>May 2023</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Solo Project: I created an app using a few different APIs including Open AI's Chat GPT so you can get AI generated birthday present ideas and personalized trip plans, as well as up to date statistics about the UFC fighters of the week  <Link to="/stackathon/present">Birthday Present Generator</Link>  </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400" style={{ display: 'flex', flexDirection: 'column', }}>
                                <h3 className="text-xl font-semibold tracki" style={{ marginTop: '1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600'}}>C Trade, Graduation & Wedding</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>June 2023</time>
                                <p className="mt-3" style={{ marginTop: '.75rem'}}>Led a team of 3 developers to create a stock research and trading community <Link to="/portfolio/capstone">app.</Link> Graduated from Fullstack Academy's Software Engineering Program and got married in the same week.  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
         In a nutshell: I'm a software developer / sales engineer / project manager / tutor who thrives on working with others. Collaborating with people, getting the best results out of a team, facilitating cooperation, and finishing projects that serve the greater good are all things that get me fired up. 
         
         I love bridging the gaps between technology and people with empathy and communication while finding efficient solutions to complex problems.
        </Typography>
        {/* <Typography
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
        </Typography> */}

            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '4rem', paddingBottom: '4rem'}}>
                    <div className="max-w-3xl mx-auto text-center" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '700' }}>Career Highlights</h2>
                        <p className="mt-4 text-lg dark:text-gray-400" style={{ marginTop: '1rem', fontSize: '1.125rem' ,lineHeight:' 1.75rem'}}>Here are a few of my personal achievements that I'm proud to have been a part of.</p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}>NAS Media Presence</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem' , width: '325px'}}>Connecting with key stakeholders to design and build the company's online presence, most notably the company website with interactive product catalog.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}>HVAC Sales</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem', width: '325px'}}>Selling HVAC products and giving presentations to Engineers about emerging and innovative technologies. Facilitating the outfitting of HVAC product for high-end construction projects all throughout Boston.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}>Tutoring Business</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem', width: '325px'}}>Tutoring 50+ students toward academic success in the SAT, Math, English, and Science. My students have achieved a 90+% acceptance rate into the colleges of their choice.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}> Technical Research Presentations</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem', width: '325px'}}>Presenting my computational chemistry research thesis at two American Chemical Society conferences.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex', marginTop: '15px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}>Fullstack Academy Capstone & Wedding</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem', width: '325px'}}>Leading a small team of software developers to finish our capstone project from Fullstack Academy and present a few days before my wedding.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>
                                <dt className="text-lg font-medium" style={{ fontSize: '1.125rem' ,lineHeight:' 1.75rem', fontWeight: '500'}}>2 World Tours</dt>
                                <dd className="mt-2 dark:text-gray-400" style={{ marginTop: '.5rem', width: '325px'}}>Creating and executing the itinerary, budget, and logistics of 2 trips around the world, once solo and another with my wife.</dd>
                            </div>
                        </div>
                        {/* TODO: 2 More Career Achievements */}
                        {/* <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>>
                                <dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
                                <dd className="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
                            </div>
                        </div>
                        <div className="flex" style={{ display: 'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400" style={{ flexShrink: '0', width: '1.5rem', height: '1.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3" style={{marginLeft: '0.75rem'}}>>
                                <dt className="text-lg font-medium">Dignissim magna</dt>
                                <dd className="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
                            </div>
                        </div> */}
                    </dl>
                </div>
            </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100" style={{paddingLeft: '.25rem', paddingRight: '.25rem', paddingTop: '2rem', paddingBottom: '2rem', marginLeft: 'auto', marginRight: 'auto'}}>
        <h2 className="mb-8 text-4xl font-bold leadi text-center" style={{ marginBottom: '1rem', fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600', textAlign: 'center' }}>Other Hobbies</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3" style={{ display: 'grid', gap: '.75rem', gridTemplateColumns: '300px 300px 300px'}}>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Painting</span>
            </li>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Playing the drums </span>
            </li>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Hiking</span>
            </li>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Travel</span>
            </li>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Sports</span>
            </li>
            <li className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', paddingLeft: '.5rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400" style={{ width: '1.25rem', height: '1.25rem', fill: 'currentColor'}}>
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Art</span>
            </li>
        </ul>
        </div>
    </div>
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


        Please reach out to talk about Javascript | React-Redux | HTML | CSS | SQL | Axios | Project Management | Technical Sales | Data Analysis | Education    
        </Typography>

    

        <FooterNav/>
    </div>
  )
}

export default AboutV2