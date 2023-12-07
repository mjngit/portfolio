import React, {useState}from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RAPIDAI_API_KEY } from '../../secrets';
import { Audio } from  'react-loader-spinner'

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Present = () => {
    const [plans, setPlans] = useState([])
    const [days, setDays] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false);
   

    const getTrip = async (e) => {
        e.preventDefault()
        setLoading(true);
       try {
         console.log('submitted')
         const options = {
            method: 'GET',
            url: 'https://ai-trip-planner.p.rapidapi.com/',
            params: {
              days: `${days}`,
              destination: `${city}, ${country}`
            },
            headers: {
              'X-RapidAPI-Key': `${RAPIDAI_API_KEY}`,
              'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
            }
          };
     
              const response = await axios.request(options);
              const plans = response.data.plan
              setPlans(plans)
              setLoading(false)
       } catch (error) {
        console.log(error)
       }
    }

    return (
        // <>
        //     <PortfolioNav/>
        //     <div>
        //         <div className='py-10' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>AI Trip Planner</h1></div>
        //         <form onSubmit={ getTrip } style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        //           <div style={{ marginBottom: 20 }}/>
        //           <div style={{ display:'flex', flexDirection: 'row', justifyContent:'center' }}>
        //           <div style={{alignSelf: 'center', fontSize: '24'}}>I'm going to </div> 
        //           <TextField label="City" variant="outlined" value={ city } onChange={ev => setCity(ev.target.value)} style={{ width: "20%", alignItems: 'center',  alignContent: 'center', marginLeft:'1%'}}/>
        //           <TextField label="Country" variant="outlined" value={ country } onChange={ev => setCountry(ev.target.value)} style={{ width: "20%", marginLeft:'1%', marginRight:'1%' }}/> 
        //           <div style={{alignSelf: 'center', fontSize: '24'}}> for </div> 
        //           <TextField label="Days" variant="outlined" value={ days } onChange={ev => setDays(ev.target.value)} style={{display: 'flex', alignSelf: 'start', width: "10%", marginLeft:'1%', marginRight:'1%' }} /> 
        //           <div style={{alignSelf: 'center', fontSize: '24'}}> days.</div>
        //           </div>
      
        //           <Button onClick={ getTrip } disabled={ !days || !city || !country || days > 10}>Please AI, Plan My Trip!</Button>
        //         </form>
        //         <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
        //             {loading ? <Audio
        //                 height = "80"
        //                 width = "80"
        //                 radius = "9"
        //                 color = 'green'
        //                 ariaLabel = 'three-dots-loading'     
        //                 wrapperStyle
        //                 wrapperClass
        //                         /> : ''}
        //         </div>
        //             {plans ? plans.map((plan, idx) => 
        //                 <div key={idx}>{
        //                     `Day ${plan.day} Plan:` 
        //                 }
        //                 <ul>
        //                     {plan.activities.map((activity, idx1) => {
        //                         return (
        //                             <li key={idx1}>{activity.time}: {activity.description}</li>
        //                         )
        //                     })}
        //                 </ul>
        //         </div>) 
                
        //             : ''}
        //     </div>
        //     <div className='pt-80'></div>
        //     <FooterNav/>
        // </>

        <>
        <div className="min-h-screen bg-gray-800 text-gray-100" style={{ minHeight: '100vh', background: 'gray', color: 'white'}}>
        <PortfolioNav/>
	<div className="p-6 space-y-8" style={{ padding: '1.5rem', paddingLeft: '2rem'}}>
		{/* <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6 dark:text-lime-400">
					<path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
					<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
				</svg>
			</a> 
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">
					<a rel="noopener noreferrer" href="#">Link</a>
					<a rel="noopener noreferrer" href="#">Link</a>
					<a rel="noopener noreferrer" href="#">Link</a>
				</div>
				<button className="px-4 py-2 rounded-md dark:bg-lime-400 dark:text-gray-900">Sign up</button>
			</div> 
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-50">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</header> */}
		<main>
			<div className="container mx-auto space-y-16" style={{ justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '2rem'}}>
                            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5" style={{ display: 'grid', gridTemplateColumns: '30rem 40rem' , gap: '1.5rem', textAlign: 'center'}}>
                                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900" style={{ width: '30rem', padding: '1.5rem', borderRadius: '1.5rem'}}>
                                    <span className="block mb-2 dark:text-lime-400" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>Smart GAI Trip Planner</span>
                                    <h1 className="text-5xl font-extrabold dark:text-gray-50" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>Itineraries Just a Click AwAI!</h1>
                                    <p className="my-8" style={{ margin: '2rem'}}>
                                        <span className="font-medium dark:text-gray-50" style={{  fontSize: '1.25rem', lineHeight: '1.5rem'}} >Custom & Spectacular.</span> Save yourself the time and money on travel agents and researching yourself. Let me be your best friend on your next vacation!
                                    </p>
                                    <form onSubmit={ getTrip } className="self-stretch space-y-3" style={{ alignSelf: 'stretch', justifyContent: 'space-around', paddingTop: '.75rem', paddingBottom: '.75rem'}}>
                                        <div>
                                            <TextField label="City" variant="filled" value={ city } onChange={ev => setCity(ev.target.value)} className="w-full rounded-md focus:ring focus:ri dark:border-gray-700 bg-white" style={{ width: '100%', background: 'white'}}/>
                                        </div>
                                        <div>                                    
                                            <TextField label="Country" variant="filled" value={ country } onChange={ev => setCountry(ev.target.value)} className="w-full rounded-md focus:ring focus:ri dark:border-gray-700 bg-white" style={{ width: '100%', background: 'white'}} /> 
                                        </div>
                                        <div>
                                            <TextField label="Days" variant="filled" value={ days } onChange={ev => setDays(ev.target.value)} className="w-full rounded-md focus:ring focus:ri dark:border-gray-700 bg-white" style={{ width: '100%', background: 'white'}} /> 
                                        </div>
                                        {/* <button className="w-full py-2 font-semibold rounded dark:bg-lime-400 dark:text-gray-900">Plan My Trip!</button> */}
                                        <button className="btn" style={{ justifyContent: 'center', width: '60%', alignItems: 'center'}}>
                                        <div>Plan My Trip!</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="20px" viewBox="5 0 24 24" fill="none" >
                                        <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M4 12.0601H14.17" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        </button>
                                    </form>
                                </div>
                                <img src="static/images/lombok.jpeg" alt="Lombok, Indonesia" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" style={{ objectFit: 'cover', width: '40rem', height: '100%', borderRadius: '1.5rem'}}/>
                            </section>
                            
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                    {/* {loading ? <Audio
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = 'green'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                                /> : ''} */}
                                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                    {/* {loading ? <Audio
                        style= {{alignItems: "center", justifyContent: "center"}}
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = 'green'
                        ariaLabel = 'three-dots-loading'     
                    /> : ''} */}

                    {loading ? <img
                        style= {{alignItems: "center", justifyContent: "center"}}
                        src='static/mrBean.gif'
                        ariaLabel = 'three-dots-loading'     
                    ></img> : ''} 
                    </div>
                </div>
                    {plans ? plans.map((plan, idx) => 
                        <div key={idx}>{
                            `Day ${plan.day} Plan:` 
                        }
                        <ul>
                            {plan.activities.map((activity, idx1) => {
                                return (
                                    <li className='text-white' key={idx1}>{activity.time}: {activity.description}</li>
                                )
                            })}
                        </ul>
                </div>) 
                
                    : ''}
                    </main>
                    
                </div>
            </div>
            {/* OG form trip form
            
            <div>
                <div className='py-10' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>AI Trip Planner</h1></div>
                <form onSubmit={ getTrip } style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{ marginBottom: 20 }}/>
                  <div style={{ display:'flex', flexDirection: 'row', justifyContent:'center' }}>
                  <div style={{alignSelf: 'center', fontSize: '24'}}>I'm going to </div> 
                  <TextField label="City" variant="outlined" value={ city } onChange={ev => setCity(ev.target.value)} style={{ width: "20%", alignItems: 'center',  alignContent: 'center', marginLeft:'1%'}}/>
                  <TextField label="Country" variant="outlined" value={ country } onChange={ev => setCountry(ev.target.value)} style={{ width: "20%", marginLeft:'1%', marginRight:'1%' }}/> 
                  <div style={{alignSelf: 'center', fontSize: '24'}}> for </div> 
                  <TextField label="Days" variant="outlined" value={ days } onChange={ev => setDays(ev.target.value)} style={{display: 'flex', alignSelf: 'start', width: "10%", marginLeft:'1%', marginRight:'1%' }} /> 
                  <div style={{alignSelf: 'center', fontSize: '24'}}> days.</div>
                  </div>
      
                  <Button onClick={ getTrip } disabled={ !days || !city || !country || days > 10}>Please AI, Plan My Trip!</Button>
                </form>
                
            </div> */}
            <FooterNav/>
        </>
    )
}

export default Present;