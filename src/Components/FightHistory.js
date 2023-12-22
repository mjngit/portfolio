import React, {useState}from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RAPIDAI_API_KEY } from '../../secrets';
import { Audio } from  'react-loader-spinner'

const FantasyWidget = () => {
    const [fightHistory, setFightHistory] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loading, setLoading] = useState(false);
   

    const getFightHistory = async (e) => {
        e.preventDefault()
        setLoading(true);
       try {
         console.log('submitted')
         const options = {
            method: 'GET',
            url: 'https://ufc-fighters.p.rapidapi.com/fighters/history',
            params: {
              first_name: `${firstName}`,
              last_name: `${lastName}`
            },
            headers: {
              'X-RapidAPI-Key': `${RAPIDAI_API_KEY}`,
              'X-RapidAPI-Host': 'ufc-fighters.p.rapidapi.com'
            }
          };
     
              const response = await axios.request(options);
              console.log(response.data.fight_history)
              const fightHistory = response.data.fight_history
              setFightHistory(fightHistory)
              setLoading(false)
       } catch (error) {
        console.log(error)
       }
    }

    return (

        <>
        <div>
        {/* <div className="min-h-screen bg-gray-800 text-gray-100" style={{ minHeight: '100vh', background: 'gray', color: 'white'}}></div> */}
      
	<div className="p-6 space-y-8" style={{ padding: '1.5rem', paddingLeft: '2rem'}}>
		
		<main>
			<div className="container mx-auto space-y-16" style={{ justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '2rem'}}>
                            {/* <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5" style={{ display: 'grid', gridTemplateColumns: '30rem 40rem' , gap: '1.5rem', textAlign: 'center'}}> */}
                                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900" style={{ width: '30rem', padding: '1.5rem', borderRadius: '1.5rem'}}>
                                    <span className="block mb-2 dark:text-lime-400" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>Underdog Score History</span>
                                    {/* <h1 className="text-5xl font-extrabold dark:text-gray-50" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>Itineraries Just a Click AwAI!</h1> */}
                                    <p className="my-8" style={{ margin: '2rem'}}>
                                        <span className="font-medium dark:text-gray-50" style={{  fontSize: '1.25rem', lineHeight: '1.5rem'}} >Be The Master of Your Domain.</span> 
                                    </p>
                                    <form onSubmit={ getFightHistory } className="self-stretch space-y-3" style={{ alignSelf: 'stretch', justifyContent: 'space-around', paddingTop: '.75rem', paddingBottom: '.75rem'}}>
                                        <div>
                                            <TextField label="First Name" variant="filled" value={ firstName } onChange={ev => setFirstName(ev.target.value)} className="w-full rounded-md focus:ring focus:ri dark:border-gray-700 bg-white" style={{ width: '100%', background: 'white'}}/>
                                        </div>
                                        <div>                                    
                                            <TextField label="Last Name" variant="filled" value={ lastName } onChange={ev => setLastName(ev.target.value)} className="w-full rounded-md focus:ring focus:ri dark:border-gray-700 bg-white" style={{ width: '100%', background: 'white'}} /> 
                                        </div>
                                       
                                        {/* <button className="w-full py-2 font-semibold rounded dark:bg-lime-400 dark:text-gray-900">Get Fighter History!</button> */}
                                        <button className='loginButton' style={{ display: 'flex', justifyContent: 'center', width: '60%', alignSelf: 'center', background: 'green', borderRadius: '.25rem' }}>
                                            <div>Get Fighter History</div>
                                        </button>
                                    </form>
                                </div>
                               
                            {/* </section> */}
                            
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
                    {/* {fightHistory ? fightHistory.map((f, idx) => 
                        <div key={idx}>{
                            `Event: ${f.event} 
                            ${f.method} against ${f.opponent}
                            ${f.result === 'win' ? `Won fight` : `Lost fight`}
                            Strikes ${f.STR}: ${f.STR / 2} points 
                            Takedowns ${f.TD}: ${f.TD * 5} points
                            Sub Attempts ${f.SUB}: ${f.SUB * 6} points
                            Knocks ${f.KD}: ${f.KD * 12} points 
                            ${f.STR / 2 + f.TD * 5 + f.KD * 12} total before bonus of:
                            ${f.result === 'win' & f.round === '1' ? `Rnd 1 W: 50 Points` : ''}
                            ${f.result === 'win' & f.round === '2' ? `Rnd 2 W: 40 Points` : ''}
                            ${f.result === 'win' & f.round === '3' & f.time !== '5:00' ? `Rnd 3 W: 30 Points` : ''}
                            ${f.result === 'win' & f.round === '3' & f.title_fight === '0' & f.time === '5:00' ? `3rd rd DEC W: 10 Points` : ''}
                            ${f.result === 'win' & f.round === '4' ? `Rnd 4 W: 20 Points` : ''}
                            ${f.result === 'win' & f.round === '5' & f.time !== '5:00' ? `Rnd 5 W: 20 Points` : ''}
                            ${f.result === 'win' & f.round === '5' & f.title_fight === '1' & f.time === '5:00' ? `DEC W: 10 Points` : ''}`
                        } */}
                        {/* <ul>
                            {plan.activities.map((activity, idx1) => {
                                return (
                                    <li className='text-white' key={idx1}>{activity.time}: {activity.description}</li>
                                )
                            })}

                    
                        </ul> */}
                    <ul>
                        {fightHistory ? fightHistory.map((f, idx) => {
                            return (
                                <>
                                <li  key={idx}>Event: {f.event}</li>
                                <li key={idx+1} >{f.method} against {f.opponent} Result: {f.result === 'win' ? `Won fight` : `Lost fight`}</li>
                                <li key={idx+2}>Strikes {f.STR}: {f.STR / 2} points </li>
                                <li key={idx+3}>Takedowns {f.TD}: {f.TD * 5} points </li>
                                <li key={idx+4}>Sub Attempts {f.SUB}: {f.SUB * 6} points </li>
                                <li key={idx+5}>Knocks {f.KD}: {f.KD * 12} points </li>
                                <li key={idx+6} style={{ fontWeight: 'bold'}}> {f.STR / 2 + f.TD * 5 + f.KD * 12} total before bonus of
                                {f.result === 'win' & f.round === '1' ? `50 Points - Rnd 1 W` : ''}
                                {f.result === 'win' & f.round === '2' ? `40 Points - Rnd 2 W` : ''}
                                {f.result === 'win' & f.round === '3' & f.time !== '5:00' ? `30 Points Rnd 3 W` : ''}
                                {f.result === 'win' & f.round === '3' & f.title_fight === '0' & f.time === '5:00' ? `10 Points - 3rd rd DEC W` : ''}
                                {f.result === 'win' & f.round === '4' ? `20 Points - Rnd 4 W` : ''}
                                {f.result === 'win' & f.round === '5' & f.time !== '5:00' ? `20 Points - Rnd 5 W` : ''}
                                {f.result === 'win' & f.round === '5' & f.title_fight === '1' & f.time === '5:00' ? `10 Points DEC W` : ''}</li>
                                <li> </li>
                                </>
                                )
                            }): ''}
                    </ul>
                    
                        
               
                   
                    
                    </main>
                    
                </div>
            </div>

        </>
    )
}

export default FantasyWidget;


// KD:"1" Opp_KD:"0" Opp_STR:"49" Opp_SUB:"0" Opp_TD:"0" STR:"41" SUB:"0" 
//                             TD:"0" date:"Apr. 08, 2023" event:"UFC 287: Pereira vs. Adesanya 2" method:"KO/TKO"
//                             opponent:"Alex Pereira" result:"win" round:"2" time:"4:21" title_fight:"1"



{/* {fightHistory ? fightHistory.map((f, idx) => {
                            return (
                                <>
                                <li  key={idx}>Event: {f.event}</li>
                                <li key={idx+1} >{f.method} against {f.opponent} Result: {f.result === 'win' ? `Won fight` : `Lost fight`}</li>
                                <li key={idx+2}>Strikes {f.STR}: {f.STR / 2} points </li>
                                <li key={idx+3}>Takedowns {f.TD}: {f.TD * 5} points </li>
                                <li key={idx+4}>Sub Attempts {f.SUB}: {f.SUB * 6} points </li>
                                <li key={idx+5}>Knocks {f.KD}: {f.KD * 12} points </li>
                                <li> {f.STR / 2 + f.TD * 5 + f.KD * 12} total before bonus of:
                                {f.result === 'win' & f.round === '1' ? `Rnd 1 W: 50 Points` : ''}
                                {f.result === 'win' & f.round === '2' ? `Rnd 2 W: 40 Points` : ''}
                                {f.result === 'win' & f.round === '3' & f.time !== '5:00' ? `Rnd 3 W: 30 Points` : ''}
                                {f.result === 'win' & f.round === '3' & f.title_fight === '0' & f.time === '5:00' ? `3rd rd DEC W: 10 Points` : ''}
                                {f.result === 'win' & f.round === '4' ? `Rnd 4 W: 20 Points` : ''}
                                {f.result === 'win' & f.round === '5' & f.time !== '5:00' ? `Rnd 5 W: 20 Points` : ''}
                                {f.result === 'win' & f.round === '5' & f.title_fight === '1' & f.time === '5:00' ? `DEC W: 10 Points` : ''}</li>
                                </>
                                )
                            }): ''} */}