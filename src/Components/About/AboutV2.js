import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'
import { Link } from 'react-router-dom'

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




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

  return (

   
    
    <div>
    <PortfolioNav />

    <div className="container mx-auto space-y-16" style={{ paddingTop: '1rem', paddingBottom: '1rem'}}>
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5" style={{ display: 'grid', gap: '.75rem', textAlign: 'center', gridTemplateColumns: '30rem 40rem',  }}>
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900" style={{ width: '100%', padding: '.75rem', borderRadius: '.5rem', backgroundColor: 'darkgray'}}>
						<span className="block mb-2 dark:text-lime-400" style={{ color: 'lime'}}>The Life of</span>
						<h1 className="text-5xl font-extrabold dark:text-gray-50" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold', }}>Michael Norris</h1>
						<p className="my-8" style={{ marginTop: '1rem', marginBottom: '1rem'}}>
							<span className="font-medium dark:text-gray-50" style={{ fontWeight: '500' }}>Adventurer, Developer, Project Manager, Sales Engineer</span>
						</p>
                        <div className='flex items-center justify-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a rel="noopener noreferrer" href="https://github.com/mjngit" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '.5rem', backgroundColor: 'lime'}}>
                                <GitHubIcon />
                            </a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mike-j-norris/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '.5rem', backgroundColor: 'lime', paddingLeft: '15px', paddingRight: '15px'}}>
                                <LinkedInIcon />
                            </a>
                            <button rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1rem', height: '1rem', borderRadius: '.5rem', backgroundColor: 'lime'}}>
                                <GoogleIcon />  
                            </button>
                        </div>
					</div>
					
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image" src="static/images/capri-boat.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/capri-boat.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/chiang-mai.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/montenegro.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/lake-bled.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/rafting.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/wedding.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/moto.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/surfer.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/waterfall.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden h-3/4" src="static/images/waterfallnz.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/ice.jpeg" style={{ className: 'hidden'}}/>
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/auspillars.jpeg"style={{ className: 'hidden'}} />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/lombok.jpeg" style={{ className: 'hidden'}}/>
                </section>
        </div>

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-lime-400">
                            <h3 className="text-3xl font-semibold">Major Events</h3>
                            <span className="text-sm font-bold tracki uppercase dark:text-gray-400">Key Moments & Achievements</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-1.5 before:dark:bg-gray-700 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Elon University</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2010</time>
                                <p className="mt-3">Was chosen to be an Organic Chemistry Teaching Assistant where I led office hours and lab, graded assignments, and mentored students.</p>
                                <p className="mt-3">This led me to begin my undergraduate research thesis in computational chemistry, I was able to hone my love of data analytics by studying the age old relationship between resonance vs. inductive effects on hydrogen bonding using computational models to analyze complex data.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Boston Children's Hospital</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2014</time>
                                <p className="mt-3">Assisted research in the pain department for a new anesthetic hoping to alleviate nausea rates during longer surgeries</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">World Tour #1</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2017</time>
                                <p className="mt-3">Planned and executed a 10 month solo trip around the world (India to Southeast Asia to Australia to New Zealand to Chile) on a tight budget</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Northeast Air Solutions</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">July 2018</time>
                                <p className="mt-3">Started as a Sales Engineer for a manufacturer's representative in the HVAC industry in Boston. Sold many different technical products and helped mechanical engineers and sheetmetal contractors complete construction projects. Gave presentations to engineers on innovative technologies to develop new business and built relationships with existing business accounts as well.   </p>
                                <p className="mt-3">Promoted to Head of Media and Marketing where along with keeping up my existing accounts and projects, I was in charge of creating the website and online presence of the company and attending conferences and trade shows as the representative of the company.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">ModernGrid</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">April 2022</time>
                                <p className="mt-3">Developed new business as the sole BDR for the team where I also assisted in building out their sales pipeline and onboarding materials </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Fullstack Academy</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">November 2022</time>
                                <p className="mt-3">Began working towards Fullstack Academy's Software Engineering Bootcamp Certification, building apps with React, Redux, Express, Node, and PostgreSQL. </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Script for Java</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">April 2023</time>
                                <p className="mt-3">Worked with 3 other developers to create an e-commerce website for a fictional coffee shop <Link to="/java/home">Script For Java</Link>  </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">Stackathon</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">May 2023</time>
                                <p className="mt-3">Solo Project: I created an app using a few different APIs including Open AI's Chat GPT so you can get AI generated birthday present ideas and personalized trip plans, as well as up to date statistics about the UFC fighters of the week  <Link to="/portfolio/capstone">Script For Java</Link>  </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400 before:bg-green-400">
                                <h3 className="text-xl font-semibold tracki">C Trade, Graduation & Wedding</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">June 2023</time>
                                <p className="mt-3">Led a team of 3 developers to create a stock research and trading community <Link to="/portfolio/capstone">app.</Link> Graduated from Fullstack Academy's Software Engineering Program and got married in the same week.  </p>
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
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Career Highlights</h2>
                        <p className="mt-4 text-lg dark:text-gray-400">Here are a few of my personal achievements that I'm proud to have been a part of.</p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">NAS Media Presence</dt>
                                <dd className="mt-2 dark:text-gray-400">Connecting with key stakeholders to design and build the company's online presence, most notably the company website with interactive product catalog.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">HVAC Sales</dt>
                                <dd className="mt-2 dark:text-gray-400">Selling HVAC products and giving presentations to Engineers about emerging and innovative technologies. Facilitating the outfitting of HVAC product for high-end construction projects all throughout Boston.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Tutoring Business</dt>
                                <dd className="mt-2 dark:text-gray-400">Tutoring 50+ students toward academic success in the SAT, Math, English, and Science. My students have achieved a 90+% acceptance rate into the colleges of their choice.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium"> Technical Research Presentations</dt>
                                <dd className="mt-2 dark:text-gray-400">Presenting my computational chemistry research thesis at two American Chemical Society conferences.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Fullstack Academy Capstone & Wedding</dt>
                                <dd className="mt-2 dark:text-gray-400">Leading a small team of software developers to finish our capstone project from Fullstack Academy and present a few days before my wedding.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">2 World Tours</dt>
                                <dd className="mt-2 dark:text-gray-400">Creating and executing the itinerary, budget, and logistics of 2 trips around the world, once solo and another with my wife.</dd>
                            </div>
                        </div>
                        {/* TODO: 2 More Career Achievements */}
                        {/* <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
                                <dd className="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-lime-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Dignissim magna</dt>
                                <dd className="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
                            </div>
                        </div> */}
                    </dl>
                </div>
            </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
        <h2 className="mb-8 text-4xl font-bold leadi text-center">Other Hobbies</h2>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Painting</span>
            </li>
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Playing the drums </span>
            </li>
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Hiking</span>
            </li>
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Travel</span>
            </li>
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Sports</span>
            </li>
            <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-lime-400">
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>Art </span>
            </li>
        </ul>
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