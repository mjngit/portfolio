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

function HomeV2() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
    <>
        <div className={isDarkMode ? 'dark-mode space-y-12 dark:bg-gray-800 dark:text-gray-100' : 'light-mode space-y-12 dark:bg-gray-800 dark:text-gray-100'} >
            <header className="p-4">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#/portfolio/homeV2" aria-label="Back to homepage" className="flex items-center p-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-lime-400">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg> */}
                        <CottageIcon />
                    </a>
                     <a rel="noopener noreferrer" href="/#/java/home" aria-label="Back to homepage" className="flex items-center p-2">
                        <EmojiFoodBeverageIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/fighters" aria-label="Back to homepage" className="flex items-center p-2">
                        <SportsKabaddiIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/trip" aria-label="Back to homepage" className="flex items-center p-2">
                        <FlightTakeoffIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/stackathon/present" aria-label="Back to homepage" className="flex items-center p-2">
                        <CardGiftcardIcon />
                    </a>
                     <a rel="noopener noreferrer" href="#/capstone/home" aria-label="Back to homepage" className="flex items-center p-2">
                        <ShowChartIcon />
                    </a>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#/java/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400">About</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#/portfolio/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400">Projects</a>
                        </li>
                        {/* <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Projects</a>
                        </li> */}
                        <li className="flex">
                            <a rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400">Email Me</a>
                        </li>
                    </ul>
                    {/* <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button> */}
                    <span className='flex items-center'>Darkmode?</span>
                    <label class="rocker rocker-small">
                        <input type="checkbox" onClick={toggleDarkMode}/>
                        <span class="switch-left">Yes</span>
                        <span class="switch-right">No</span>
                    </label>
                </div>
            </header>
            <Signature />
            <section>
                <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl">
                        <div>Michael Norris </div>
                        <span className="dark:text-lime-400">Developer </span>
                        <div>Sales Engineer</div>
                        <span> Project Manager</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Versatile Tech Leader: Elevating Projects with Expertise in Software Engineering, Project Management, and Sales Engineering Excellence</p>
                    <div className="flex flex-wrap justify-center">
                        <button  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-lime-400 dark:text-gray-900"><Link to='/portfolio/home'>Get started</Link></button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"><Link to='/java/about'>Learn more</Link></button>
                    </div>
                </div>
            </section>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Students Tutored</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">1M+</p>
                        <p className="text-sm sm:text-base">Sales in HVAC Industry</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">100+</p>
                        <p className="text-sm sm:text-base">Newsletters Published</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">6</p>
                        <p className="text-sm sm:text-base">Projects</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">12</p>
                        <p className="text-sm sm:text-base">Years of overall experience</p>
                    </div>
                    {/* <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div> */}
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="text-2xl font-bold leadi sm:text-4xl">What can I offer to you?</h2>
                        <p className="px-8 my-4">I will effectively lead and/or manage projects from conception to completion while implementing 
                        best practives to ensure timely delivery and resource optimization. I will provide technical leadership and guidance to 
                        development teams to foster innovation and implement emerging technologies. I would love to bridge the gap between technical and sales teams, 
                        translating complex concepts for nontechnical stakeholders.  </p>
                    </div>
                    <div className="grid grid-cols-5 p-4 md:p-8">
                        {/* <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Mucius</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-lime-400 dark:text-gray-50">Fabellas</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Aperiam</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Nonumy</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Propriae</button>
                        </div> */}
                        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Comprehensive Optimization</h5>
                                <p>I streamline workflows and processes for enhanced productivity. Happy to assist with training programs to enhance technical skills and project management capabilities</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Collaboration and Communication</h5>
                                <p>I bridge the gap between technical and sales teams, translating complex concepts for nontechnical stakeholders. I can develop and deliver compelling technical presentations to clients, while collaborating with sales teams to understand client needs and propose tailored solutions.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Continuous Learning</h5>
                                <p>I stay abreast of industry trends and advancements and have demonstrated adaptability by quickly learning and implementing new technologies</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-lime-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Customer Service</h5>
                                <p>I build and maintain strong client relationships through effective communication to understand their needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leadi">Connect with me on LinkedIn</h1>
                        <p className="text-lg">Connect with me and shoot me a message to talk about anything and everything!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        {/* <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-lime-400 dark:text-gray-900">Subscribe</button>
                        </div> */}
                        {/* TODO: NEED TO ADD A CONNECT WITH ME ON LINKED IN LINK THERE OR SOMETHING LIKE THAT */}
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#/capstone/home" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="/static/images/trip-planner.jpeg" alt="Trip Planner Thumbnail" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Capstone: C-Trade</h3>
                            <span className="text-xs dark:text-gray-400">June 20, 2023</span>
                            
                            <p>This is my capstone project where I worked with 2 other people to design and build a trading community to research, discuss, buy, and sell stocks. I was the lead engineer on this project.</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#/stackathon/fighters" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/fighter-stats.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">UFC Stat Tool</h3>
                                <span className="text-xs dark:text-gray-400">May 15, 2023</span>
                                <p>Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies!</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/stackathon/present" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/bday-present.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">AI Birthday Present Generator</h3>
                                <span className="text-xs dark:text-gray-400">May 15, 2023</span>
                                <p>Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!)</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/java/home" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/SFJ-thumbnail.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Script for Java Coffee Shop</h3>
                                <span className="text-xs dark:text-gray-400">April 20, 2023</span>
                                <p>This is my first group project at Fullstack Academy where we made an E-commerce website. Have a look at our products and fill your cart!</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/stackathon/trip" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/capstone-thumbnail.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">AI Trip Planner</h3>
                                <span className="text-xs dark:text-gray-400">May 15, 2023</span>
                                <p>Plan Your Next Trip in StAIle</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#/portfolio/happyNotes" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/happynotegrab.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Happy Notes</h3>
                                <span className="text-xs dark:text-gray-400">Nov 15, 2023</span>
                                <p>This is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times</p>
                            </div>
                        </a>  
                    </div>
                    {/* <div className="flex justify-center">
                        <button className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                    </div> */}
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
                <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row">
                    <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start dark:text-lime-400 dark:border-lime-400">
                        <li className='dark:text-lime-400 dark:border-lime-400' href="#/java/about">About</li>
                        {/* <li href="#/java/about">Blog</li> */}
                        <li className='dark:text-lime-400 dark:border-lime-400' href="#/portfolio/home">Projects</li>
                        <li className='dark:text-lime-400 dark:border-lime-400'> <Link to="/java/about/contact">Contact</Link></li>
                    </ul>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-4">
                            <a rel="noopener noreferrer" href="https://www.instagram.com/numerounoabuelo/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg> */}
                                <InstagramIcon />
                            </a>
                            {/* Pinterest */}
                            {/* <a rel="noopener noreferrer" href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                    <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                                </svg>
                            </a> */}
                            {/* Twitter */}
                            {/* <a rel="noopener noreferrer" href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                </svg>
                            </a> */}
                            <a rel="noopener noreferrer" href="https://github.com/mjngit" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <GitHubIcon />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                </svg> */}
                            </a>
                            {/* Facebook */}
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mike-j-norris/" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <LinkedInIcon />
                            </a>
                            {/* <a rel="noopener noreferrer"  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                               <GoogleIcon />
                            </a> */}
                            <button rel="noopener noreferrer" onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-lime-400 dark:text-gray-900">
                                <GoogleIcon />  
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  )
}

export default HomeV2


// <a rel="noopener noreferrer" href="#/stackathon/trip" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
//                         <img src="/static/images/trip-planner.jpeg" alt="Trip Planner Thumbnail" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
//                         <div className="p-6 space-y-2 lg:col-span-5">
//                             <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">AI Trip Planner</h3>
//                             <span className="text-xs dark:text-gray-400">May 15, 2023</span>
//                             <p>Plan Your Next Trip in StAIle</p>
//                         </div>
//                     </a>
//                     <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         <a rel="noopener noreferrer" href="#/stackathon/fighters" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
//                             <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/fighter-stats.jpeg" />
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">UFC Stat Tool</h3>
//                                 <span className="text-xs dark:text-gray-400">May 15, 2021</span>
//                                 <p>Need help identifying stat discrepencies in the matchups for this week? Here is a perfect starting point for your research. Now go beat down those bookies!</p>
//                             </div>
//                         </a>
//                         <a rel="noopener noreferrer" href="#/stackathon/present" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
//                             <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/bday-present.jpeg" />
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">AI Birthday Present Generator</h3>
//                                 <span className="text-xs dark:text-gray-400">May 15, 2021</span>
//                                 <p>Birthday coming up for a special someone and need some gift ideas? Let Chat-GPT help you out (keep in mind links might be outdated but the ideas remain helpful!)</p>
//                             </div>
//                         </a>
//                         <a rel="noopener noreferrer" href="#/java/home" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
//                             <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/SFJ-thumbnail.jpeg" />
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Script for Java Coffee Shop</h3>
//                                 <span className="text-xs dark:text-gray-400">April 20, 2023</span>
//                                 <p>This is my first group project at Fullstack Academy where we made an E-commerce website. Have a look at our products and fill your cart!</p>
//                             </div>
//                         </a>
//                         <a rel="noopener noreferrer" href="#/capstone/home" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900">
//                             <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/capstone-thumbnail.jpeg" />
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Capstone: C-Trade</h3>
//                                 <span className="text-xs dark:text-gray-400">June 20, 2023</span>
//                                 <p>This is my capstone project where I worked with 2 other people to design and build a trading community to research, discuss, buy, and sell stocks. I was the lead engineer on this project.</p>
//                             </div>
//                         </a>
//                         <a rel="noopener noreferrer" href="#/portfolio/happyNotes" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block dark:bg-gray-900">
//                             <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/static/images/happynotegrab.jpeg" />
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Happy Notes</h3>
//                                 <span className="text-xs dark:text-gray-400">Nov 15, 2023</span>
//                                 <p>This is a place to spread happiness by sharing nice experiences with others and to appreciate joyful times</p>
//                             </div>
//                         </a>