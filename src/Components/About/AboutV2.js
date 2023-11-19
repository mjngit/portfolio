import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'





const AboutV2 = () => {

    let currentImageIndex = 0;
    const carouselImages = document.querySelectorAll(".carousel-image");
    setInterval(() => {
        carouselImages[currentImageIndex].classList.add('hidden')
        currentImageIndex += 1
        if(currentImageIndex === 7){
            currentImageIndex = 0
        }
        carouselImages[currentImageIndex].classList.remove('hidden')
        
    }, 4000);   

  return (

   
    
    <div>
    <PortfolioNav />

    <div className="container mx-auto space-y-16">
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
						<span className="block mb-2 dark:text-lime-400">The Life of</span>
						<h1 className="text-5xl font-extrabold dark:text-gray-50">Michael Norris</h1>
						<p className="my-8">
							<span className="font-medium dark:text-gray-50">Adventurer, Developer, Project Manager, Sales Engineer</span>
						</p>
						
					</div>
					
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image" src="static/images/capri-boat.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/capri-boat.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/chiang-mai.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/montenegro.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/lake-bled.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/rafting.jpeg" />
                    <img className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500 carousel-image hidden" src="static/images/wedding.jpeg" />
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
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-1.5 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">Elon University</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2010</time>
                                <p className="mt-3">Was chosen to be an Organic Chemistry Teaching Assistant where I led office hours and lab, graded assignments, and mentored students.</p>
                                <p className="mt-3">This led me to begin my undergraduate research thesis in computational chemistry, I was able to hone my love of data analytics by studying the age old relationship between resonance vs. inductive effects on hydrogen bonding using computational models to analyze complex data.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">Boston Children's Hospital</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2014</time>
                                <p className="mt-3">Assisted research in the pain department for a new anesthetic hoping to alleviate nausea rates during longer surgeries</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">World Tour #1</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">January 2017</time>
                                <p className="mt-3">Planned and executed a 10 month solo trip around the world (India to Southeast Asia to Australia to New Zealand to Chile) on a tight budget</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">Northeast Air Solutions</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">July 2018</time>
                                <p className="mt-3">Started as a Sales Engineer for a manufacturer's representative in the HVAC industry in Boston. Sold many different technical products and helped mechanical engineers and sheetmetal contractors complete construction projects. Gave presentations to engineers on innovative technologies to develop new business and built relationships with existing business accounts as well.   </p>
                                <p className="mt-3">Promoted to Head of Media and Marketing where along with keeping up my existing accounts and projects, I was in charge of creating the website and online presence of the company and attending conferences and trade shows as the representative of the company.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">ModernGrid</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">April 2022</time>
                                <p className="mt-3">Developed new business as the sole BDR for the team where I also assisted in building out their sales pipeline and onboarding materials </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                                <h3 className="text-xl font-semibold tracki">Fullstack Academy</h3>
                                <time className="text-xs tracki uppercase dark:text-gray-400">November 2022</time>
                                <p className="mt-3">Began working towards Fullstack Academy's Software Engineering Bootcamp Certification, building apps with React, Redux, Express, Node, and PostgreSQL. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* <div>
        <section id="carousel">
            <div id="carousel-text">
                <h1>About Michael J Norris</h1>
                <h2>Learn More</h2>
            </div>
            <img class="carousel-image" src="static/images/capri-boat.jpeg" />
            <img class="carousel-image hidden" src="static/images/capri-boat.jpeg" />
            <img class="carousel-image hidden" src="static/images/chiang-mai.jpeg" />
            <img class="carousel-image hidden" src="static/images/montenegro.jpeg" />
            <img class="carousel-image hidden" src="static/images/lake-bled.jpeg" />
            <img class="carousel-image hidden" src="static/images/rafting.jpeg" />
            <img class="carousel-image hidden" src="static/images/wedding.jpeg" />
        </section>
</div> */}
    {/* <Typography
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
    </Typography> */}
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

export default AboutV2