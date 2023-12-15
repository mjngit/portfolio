import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CottageIcon from '@mui/icons-material/Cottage';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const AboutContact = () => {
  return (
    <div>
      <PortfolioNav/>
      {/* <div class="flex justify-center pt-20 group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
          <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span class="text-5xl font-bold">MN</span>
            <p class="text-amber-300 font-thin">- Fullstack Developer -</p>
          </div>
        </div> */}
      <div className="relative h-full w-full flex items-center justify-center" style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50" style={{ position: 'relative', padding: '2.5rem', borderWidth: '2px', borderStyle: "dashed", borderRadius: '9999px', borderSpacing: '1rem 1rem'  }}>
          <button href="https://github.com/mjngit" className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', left: '45px', top: '4px', borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1"
            style={{ display: 'block', width: '40px', height: '40px', borderRadius: '9999px', zIndex: '2', padding: '.25rem' }}>
              <a href="https://github.com/mjngit">
                <GitHubIcon/>
              </a>
            </span>
          </button>

          <button href="#/portfolio/homeV2" className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', right: '48px', top: '4px', borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <a href="#/portfolio/homeV2">
                <CottageIcon/>
              </a>
            </span>
          </button>

          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', left: '-.80rem', top:'5rem', borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <a href="https://www.instagram.com/numerounoabuelo/">
                <InstagramIcon/>
              </a>
            </span>
          </button>

          <button onClick={() => window.location = 'mailto:mnorris6@elon.edu'} className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', right: '-.80rem', top: '5rem', borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <GoogleIcon/>
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', left: '4%', bottom: '2rem', borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span  className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <a href="https://www.linkedin.com/in/mike-j-norris/">
                <LinkedInIcon/>
              </a>
            </span>
          </button>

          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"  style={{ position: 'absolute', right: '4%', bottom: '2rem' ,borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <a href="#/capstone/home" >
                <ShowChartIcon/>
              </a>
            </span> 
          </button>

          <button alt='Phone: 617-610-1869' className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 tooltip" style={{ position: 'absolute', bottom: '-.25rem', right: '20%' , borderRadius: '999rem', className: 'tooltip', background: 'cover', cursor: 'pointer'}}>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 ">
              <PhoneAndroidIcon/>
            </span>
          </button>

          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0 " 
          style={{ width: '200px', height: '200px', padding: '.1rem', borderRadius: '1rem' }}>
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 " style={{  display: 'flex', background: 'white', justifyContent: 'center', padding: '.5rem', borderRadius: '999rem' }}>
            <img className='object-contain' src='/static/images/CircleSelfie.png' style={{ objectFit: 'contain', width: '190px', height: '190px'}}></img>
              
            </div>
          </button>
        </div>
      </div>


      {/* <SubNavAbout/>

      

      
       <Typography
       sx={{
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        mx: 'auto',
        marginTop: '1rem',
        
        maxWidth: '50%'
       }}>
        <h3>Please contact me at:</h3>
        <li style={{listStyleType: 'none'}}>Phone: <a href="tel:617-610-1869">617-610-1869</a></li>
        <li style={{listStyleType: 'none'}}>Email: <a href="mailto:mnorris6@elon.edu">mnorris6@elon.edu</a></li>
        </Typography>
        <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
          <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span class="text-5xl font-bold">MN</span>
            <p class="text-amber-300 font-thin">- Fullstack Developer -</p>
          </div>
        </div>
       <div className='py-32'></div> */}
        <FooterNav/>
    </div>
  )
}

export default AboutContact