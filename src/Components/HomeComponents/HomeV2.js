import React, { useState } from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Signature from './Signature'
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { width } from '@mui/system';

function HomeV2() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
    <>
        <div className={isDarkMode ? 'dark-mode space-y-12 dark:bg-gray-800 dark:text-gray-100' : 'light-mode space-y-12 dark:bg-gray-800 dark:text-gray-100'} style={{marginTop: 12 }} >
            {/* TODO: DARK MODE AND LIGHT MODE backgroundColor: 'darkgray'. color: 'white' */}
            <header className="p-4" style={{padding: '2rem'}}>
                <div className="container flex justify-between h-16 mx-auto" id='container' style={{ display: 'flex', justifyContent:'space-between', height:'16px' }}>
                    <a rel="noopener noreferrer" href="#/portfolio/homeV2" aria-label="Back to homepage" className="flex items-center p-2" style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <CottageIcon />
                    </a>
                     <a rel="noopener noreferrer" href="/#/java/home" aria-label="Back to homepage" className="flex items-center p-2" style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <EmojiFoodBeverageIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/fighters" aria-label="Back to homepage" className="flex items-center p-2 " style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <SportsKabaddiIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/trip" aria-label="Back to homepage" className="flex items-center p-2" style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <FlightTakeoffIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/present" aria-label="Back to homepage" className="flex items-center p-2" style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <CardGiftcardIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/capstone/home" aria-label="Back to homepage" className="flex items-center p-2" style={{display: 'flex', alignItems: 'center', padding: '2', color: '#03b1fc' }}>
                        <ShowChartIcon />
                    </a>
                    <ul className="items-stretch hidden space-x-3 md:flex" style={{ display: 'flex', alignItems: 'stretch',  marginLeft: '12px'}}>
                        <li className="flex" style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" href="#/java/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 " style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px', color: '#03b1fc' }}>About</a>
                        </li>
                        <li className="flex" style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" href="#/portfolio/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400" style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px', color: '#03b1fc' }}>Projects</a>
                        </li>
                        <li className="flex" style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400" style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px' }}>Email Me</a>
                        </li>
                    </ul>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <span className='flex items-center' style={{ display: 'flex', alignItems: 'center'}}>Darkmode?</span>
                        <label className="rocker rocker-small" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <input type="checkbox" onClick={toggleDarkMode}/>
                            <span className="switch-left">Yes</span>
                            <span className="switch-right">No</span>
                        </label>
                    </div>
                </div>
            </header>
            <Signature />
            <section>
                <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '4px', paddingRight: '4px', paddingTop: '8px', paddingBottom: '8px', textAlign: 'center' }}>
                    <h1 className="text-4xl font-bold leadi sm:text-5xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold', paddingTop: '2rem' }} >
                        <div>Michael Norris </div>
                        <span className="dark:text-lime-400" style={{ color: 'lime'}}>Developer </span>
                        <div>Sales Engineer</div>
                        <span> Project Manager</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg" style={{paddingLeft: '32px', paddingRight: '32px', marginBottom: '72px', marginTop: '32px', fontSize: '1.125rem', lineHeight: '1,75rem', width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>Versatile Tech Leader: Elevating Projects with Expertise in Software Engineering, Project Management, and Sales Engineering Excellence</p>
                    <div className="flex flex-wrap justify-center" style={{ display: 'flex', flexDirection: 'wrap', justifyContent: 'center', paddingBottom: '4rem' }}>
                        <button  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-lime-400 dark:text-gray-900" style={{margin: '8px', paddingLeft: '32px', paddingRight: '32px', margin: '0.5rem', fontSize: '1.125rem', fontWeight: '600', borderRadius: '0.25rem'  }}><Link to='/capstone/login'>Get started</Link></button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700" style={{margin: '8px', paddingLeft: '32px', paddingRight: '32px', margin: '0.5rem', fontSize: '1.125rem', fontWeight: '600', borderRadius: '0.25rem'  }}><Link to='/java/about'>Learn more</Link></button>
                    </div>
                </div>
            </section>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100" style={{ padding: '1.5rem'}}>
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3" style={{ display: 'grid', justifyContent: 'center', gridTemplateColumns: `350px 350px 350px`, textAlign: 'center' }}>
                    <div className="flex flex-col justify-start m-2 lg:m-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '0.5rem'}}>
                        <p className="text-4xl font-bold leadi lg:text-6xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>50+</p>
                        <p className="text-sm sm:text-base" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>Students Tutored</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '0.5rem'}}>
                        <p className="text-4xl font-bold leadi lg:text-6xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>1M+</p>
                        <p className="text-sm sm:text-base" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>Sales in HVAC Industry</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '0.5rem'}}>
                        <p className="text-4xl font-bold leadi lg:text-6xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>100+</p>
                        <p className="text-sm sm:text-base" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>Newsletters Published</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '0.5rem'}}>
                        <p className="text-4xl font-bold leadi lg:text-6xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>6</p>
                        <p className="text-sm sm:text-base" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>Projects</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '0.5rem'}}>
                        <p className="text-4xl font-bold leadi lg:text-6xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>12</p>
                        <p className="text-sm sm:text-base" style={{ fontSize: '0.875rem', lineHeight: '1.25rem'}}>Years of overall experience</p>
                    </div>
                    {/* <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div> */}
                </div>
            </section>
            <section className="py-8" style={{ paddingTop: '4rem', paddingBottom: '4rem'}}>
                <div className="container mx-auto">
                    <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl" style={{ padding: '4px', textAlign: 'center'}}>
                        <h2 className="text-2xl font-bold leadi sm:text-4xl" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 'bold'}}>What can I offer to you?</h2>
                        <p className="px-8 my-4" style={{ paddingLeft: '32px', paddingRight: '32px', marginBottom: '48px', marginTop: '16px', marginBottom: '16px'}}>I will effectively lead and/or manage projects from conception to completion while implementing 
                        best practives to ensure timely delivery and resource optimization. I will provide technical leadership and guidance to 
                        development teams to foster innovation and implement emerging technologies. I would love to bridge the gap between technical and sales teams, 
                        translating complex concepts for nontechnical stakeholders.  </p>
                    </div>
                    <div className="grid grid-cols-5 p-4 md:p-8" style={{ display: 'grid', gridTemplateColumns: '500px 500px', padding: '8px', justifyContent: 'center' }}>
                        {/* <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Mucius</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-lime-400 dark:text-gray-50">Fabellas</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Aperiam</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Nonumy</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Propriae</button>
                        </div> */}
                        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left" style={{ display: 'grid', gap: '3rem', paddingTop: '4rem', paddingBottom: '16px', textAlign: 'start', gridTemplateColumns: '550px 550px' }}>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', marginTop: '1rem'}}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400" style={{ width: '1.5rem', height: '1.5rem' , color:'limegreen'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold" style={{ fontSize: '1.125rem', lineHeight: '1.75rem'}}>Comprehensive Optimization</h5>
                                <p>I streamline workflows and processes for enhanced productivity. Happy to assist with training programs to enhance technical skills and project management capabilities</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', marginTop: '1rem'}}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400" style={{ width: '1.5rem', height: '1.5rem', color:'limegreen', }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold" style={{ fontSize: '1.125rem', lineHeight: '1.75rem'}}>Collaboration and Communication</h5>
                                <p>I bridge the gap between technical and sales teams, translating complex concepts for nontechnical stakeholders. I can develop and deliver compelling technical presentations to clients, while collaborating with sales teams to understand client needs and propose tailored solutions.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', marginTop: '1rem'}}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400" style={{ width: '1.5rem', height: '1.5rem' , color:'limegreen'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                </svg>
                                <h5 className="text-xl font-semibold" style={{ fontSize: '1.125rem', lineHeight: '1.75rem'}}>Continuous Learning</h5>
                                <p>I stay abreast of industry trends and advancements and have demonstrated adaptability by quickly learning and implementing new technologies</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', marginTop: '1rem'}}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400" style={{ width: '1.5rem', height: '1.5rem' , color:'limegreen'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold" style={{ fontSize: '1.125rem', lineHeight: '1.75rem'}}>Customer Service</h5>
                                <p>I build and maintain strong client relationships through effective communication to understand their needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row" style={{ display: 'flex', flexDirection: 'row', padding: ".75rem", marginLeft: '2rem', alignItems: 'center' }}>
                    <div className="flex flex-col space-y-4 text-center lg:text-left" style={{ display: 'flex', flexDirection: 'column', padding: ".75rem", marginLeft: '2rem', textAlign: 'left' }}>
                        <h1 className="text-5xl font-bold leadi">Connect with me on LinkedIn</h1>
                        <p className="text-lg" >Connect with me and shoot me a message to talk about anything and everything!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'center', flexShrink: '0', padding: ".75rem", marginLeft: '2rem' }}>
                    {/* <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mike-j-norris/" className="flex items-center justify-center w-40 h-40 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <LinkedInIcon />
                    </a> */}
                    <Link to='https://www.linkedin.com/in/mike-j-norris/'><button href="https://www.linkedin.com/in/mike-j-norris/" className="linkbutton"> 
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
                    Continue to my LinkedIn
                    </button></Link> 
                        {/* TODO: NEED TO ADD A CONNECT WITH ME ON LINKED IN LINK THERE OR SOMETHING LIKE THAT */}
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12" style={{ padding: '1rem', textDecoration: 'none' }}>
                    <a rel="noopener noreferrer" href="#/capstone/home" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900" style={{  display: 'block', width: '20rem', gap: '.75rem', textDecoration: 'none', color: '#8b94e0' }}>
                        <div style={{ display: 'flex'}}>
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/capstone-thumbnail.jpeg" style={{ objectFit: 'cover', width: '60rem', borderRadius: '0.25rem', height: '14rem'   }}  />
                                <div className="p-6 space-y-2 lg:col-span-5" style={{ paddingLeft: '1.5rem', width: '200px'}}>
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600', width: '200px'}}>Capstone: C-Trade</h3>
                                    <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>June 20, 2023</span>
                                    <p style={{ width: '200px'}}>This is my capstone project where I worked with 2 other people to design and build a trading community to research, discuss, buy, and sell stocks. I was the lead engineer on this project.</p>
                                </div>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', textDecoration: 'none', color: 'lightblue' }}>
                        <a rel="noopener noreferrer" href="#/stackathon/fighters" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" style={{ width: '20rem', textDecoration: 'none', color: '#8b94e0'  }}>
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/fighter-stats.jpeg" style={{ objectFit: 'cover', width: '100%', borderRadius: '0.25rem', height: '12rem'   }} />
                            <div className="p-6 space-y-2" style={{ padding: '1.5rem' }}>
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600'}}>UFC Stat Tool</h3>
                                <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>May 15, 2023</span>
                                <p>Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies!</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/stackathon/present" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" style={{ maxWidth: '20rem', textDecoration: 'none', color: '#8b94e0'  }}>
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/bday-present.jpeg" style={{ objectFit: 'cover', width: '100%', borderRadius: '0.25rem', height: '12rem'   }}  />
                            <div className="p-6 space-y-2" style={{ padding: '1.5rem' }}>
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600'}}>AI Birthday Present Generator</h3>
                                <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>May 15, 2023</span>
                                <p>Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!)</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/java/home" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900" style={{ maxWidth: '20rem', textDecoration: 'none', color: '#8b94e0'  }}>
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/SFJ-thumbnail.jpeg" style={{ objectFit: 'cover', width: '100%', borderRadius: '0.25rem', height: '12rem'   }}  />
                            <div className="p-6 space-y-2" style={{ padding: '1.5rem' }}>
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600'}}>Script for Java Coffee Shop</h3>
                                <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>April 20, 2023</span>
                                <p>This is my first group project at Fullstack Academy where we made an E-commerce website. Have a look at our products and fill your cart!</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/stackathon/trip" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900" style={{ maxWidth: '20rem', textDecoration: 'none', color: '#8b94e0'  }}>
                            <img src="/static/images/trip-planner.jpeg" alt="Trip Planner Thumbnail" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" style={{ objectFit: 'cover', width: '100%', borderRadius: '0.25rem', height: '16rem'   }} />
                                <div className="p-6 space-y-2" style={{ padding: '1.5rem' }}>
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600'}}>AI Trip Planner</h3>
                                    <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>May 15, 2023</span>
                                    <p>Plan Your Next Trip in StAIle</p>
                                </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/portfolio/happyNotes" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900" style={{ maxWidth: '20rem', textDecoration: 'none', color: '#8b94e0'  }}>
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/happynotegrab.jpeg" style={{ objectFit: 'cover', width: '100%', borderRadius: '0.25rem', height: '12rem'   }}  />
                            <div className="p-6 space-y-2" style={{ padding: '1.5rem' }}>
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600'}}>Happy Notes</h3>
                                <span className="text-xs dark:text-gray-400" style={{ fontSize: '0.75rem', lineHeight: '1rem'}}>Nov 15, 2023</span>
                                <p>This is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times</p>
                            </div>
                            
                        </a>  
                    </div>
                    
                </div>
            </section>
            {/* <section>
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
                            <p className="dark:text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/51x51/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/52x52/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/53x53/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/54x54/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400">Shoot me a message or connect with me on any social media</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="Contact our customer support" className="p-6 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-lime-400 dark:text-gray-900">Send Message</button>
                </form>
            </div> */}
            <footer>
                <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row" style={{ display: 'flex', flexDirection: 'row', padding: '1rem', justifyContent: 'space-around'}}>
                <div className="container flex justify-between h-16 mx-auto" id='container' style={{ display: 'flex', justifyContent:'space-between', height:'16px' }}> 
                     <ul className="items-stretch hidden space-x-3 md:flex" style={{ display: 'flex', alignItems: 'stretch',  marginLeft: '12px'}}>
                         <li className="flex" style={{ display: 'flex'}}>
                             <a rel="noopener noreferrer" href="#/java/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 " style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px', color: '#03b1fc' }}>About</a>
                         </li>
                         <li className="flex" style={{ display: 'flex'}}>
                             <a rel="noopener noreferrer" href="#/portfolio/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400" style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px', color: '#03b1fc' }}>Projects</a>
                         </li>
                         <li className="flex" style={{ display: 'flex'}}>
                             <a rel="noopener noreferrer" href="#/java/about/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 text-blue-400"  style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px', color: '#03b1fc' }}>Contact</a>
                         </li>
                     </ul>
                </div>
                {/* <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start dark:text-lime-400 dark:border-lime-400" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', alignSelf: 'center', textAlign: 'center', display: 'flex', paddingLeft: '2rem', justifyContent: 'space-around' }}>
                        {/* <li className='dark:text-lime-400 dark:border-lime-400' href="#/java/about">About</li>
                        <li href="#/java/about">Blog</li> 
                        <li className='dark:text-lime-400 dark:border-lime-400' href="#/portfolio/home">Projects</li>
                        <li className='dark:text-lime-400 dark:border-lime-400'> <Link to="/java/about/contact">Contact</Link></li> 
                        <li className="flex" style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" href="#/java/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 text-blue-400">About</a>
                        </li>
                        <li className="flex"  style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" href="#/portfolio/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 text-blue-400">Projects</a>
                        </li>
                        <li className="flex"  style={{ display: 'flex'}}>
                            <a rel="noopener noreferrer" href="#/java/about/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 text-blue-400">Contact</a>
                        </li>
                    </ul> */}
                    <div className="flex flex-col justify-center pt-6 lg:pt-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '1.5rem', alignItems: 'flex-end' }} >
                        <div className="flex justify-center space-x-4" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem' }}>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/numerounoabuelo/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem', color: '#03b1fc' }} >
                                <InstagramIcon />
                            </a>
                            {/* Pinterest 
                            { <a rel="noopener noreferrer" href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                    <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                                </svg>
                            </a> */}
                            {/* Twitter */}
                            {/* <a rel="noopener noreferrer" href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                </svg>
                            </a> */}
                            <a rel="noopener noreferrer" href="https://github.com/mjngit" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem', color: '#03b1fc' }} >
                                <GitHubIcon />                               
                            </a>

                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mike-j-norris/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem', color: '#03b1fc' }} >
                                <LinkedInIcon />
                            </a>
                            <a>
                            <button rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingLeft: '2rem', color: '#03b1fc' }} >
                                <GoogleIcon />  
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  )
}

export default HomeV2



//                  <div className="container flex justify-between h-16 mx-auto" id='container' style={{ display: 'flex', justifyContent:'space-between', height:'16px' }}> 
//                     <ul className="items-stretch hidden space-x-3 md:flex" style={{ display: 'flex', alignItems: 'stretch',  marginLeft: '12px'}}>
//                         <li className="flex" style={{ display: 'flex'}}>
//                             <a rel="noopener noreferrer" href="#/java/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 " style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px' }}>About</a>
//                         </li>
//                         <li className="flex" style={{ display: 'flex'}}>
//                             <a rel="noopener noreferrer" href="#/portfolio/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400" style={{display: 'flex', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px', borderWidth: '2px' }}>Projects</a>
//                         </li>
//                         <li className="flex" style={{ display: 'flex'}}>
//                             <a rel="noopener noreferrer" href="#/java/about/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400 text-blue-400">Contact</a>
//                         </li>
//                     </ul>
//                 </div>