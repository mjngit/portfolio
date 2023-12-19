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
              const fightHistory = response.data.body.fight_history
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
                    {fightHistory ? fightHistory.map((fight, idx) => 
                        <div key={idx}>{
                            `${fight.event}`
                            `${fight.method} against ${fight.opponent}`
                            (fight.result === 'win' ? `Won fight` : ' Lost Fight')
                            `Strikes ${fight.STR}: ${fight.STR / 2} points` 
                            `Takedowns${fight.TD}: ${fight.TD * 5} points`
                            `Knocks${fight.KD}: ${fight.KD * 12} points`
                            `${fight.STR / 2 + fight.TD * 5 + fight.KD * 12} total points before win bonus of:`
                            (fight.result === 'win' & fight.round === '1' ? `1th Round Win: 50 Points` : '')
                            (fight.result === 'win' & fight.round === '2' ? `2th Round Win: 40 Points` : '')
                            (fight.result === 'win' & fight.round === '3' & fight.time !== '5:00' ? `3th Round Win: 30 Points` : '')
                            (fight.result === 'win' & fight.round === '3' & fight.title_fight === '0' & fight.time === '5:00' ? `3rd rd Decision Win: 10 Points?` : '')
                            (fight.result === 'win' & fight.round === '4' ? `4th Round Win: 20 Points` : '')
                            (fight.result === 'win' & fight.round === '5' & fight.time !== '5:00' ? `5th Round Win: 10 Points` : '')
                            (fight.result === 'win' & fight.round === '5' & fight.title_fight === '1' & fight.time === '5:00' ? `Decision Win: 10 Points` : '')
                        }
                        {/* <ul>
                            {plan.activities.map((activity, idx1) => {
                                return (
                                    <li className='text-white' key={idx1}>{activity.time}: {activity.description}</li>
                                )
                            })}

                            KD:"1" Opp_KD:"0" Opp_STR:"49" Opp_SUB:"0" Opp_TD:"0" STR:"41" SUB:"0" 
                            TD:"0" date:"Apr. 08, 2023" event:"UFC 287: Pereira vs. Adesanya 2" method:"KO/TKO"
                            opponent:"Alex Pereira" result:"win" round:"2" time:"4:21" title_fight:"1"
                        </ul> */}
                </div>) 
                
                    : ''}
                    </main>
                    
                </div>
            </div>

        </>
    )
}

export default FantasyWidget;