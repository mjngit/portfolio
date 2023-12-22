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
    const [firstFightScore, setFirstFightScore] = useState(0)
    const [secondFightScore, setSecondFightScore] = useState(0)
    const [thirdFightScore, setThirdFightScore] = useState(0)
    const [fourthFightScore, setFourthFightScore] = useState(0)
    const [fifthFightScore, setFifthFightScore] = useState(0)
   

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
              if(fightHistory[0].result === 'upcoming_fight'){
                setFirstFightScore((fightHistory[1].STR / 2) + (fightHistory[1].TD * 5) + (fightHistory[1].SUB * 6) + (fightHistory[1].KD * 12) + (fightHistory[1].result === 'win' & fightHistory[1].round === '1' ? 50 : fightHistory[1].result === 'win' & fightHistory[1].round === '2' ? 40 : fightHistory[1].result === 'win' & fightHistory[1].round === '3' ? 30 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' & fightHistory[1].title_fight === '0' & fightHistory[1].time === '5:00' ? 10 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '5' & fightHistory[1].time !== '5:00' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '5' & fightHistory[1].time === '5:00' ? 10 : 0))
                setSecondFightScore((fightHistory[2].STR / 2) + (fightHistory[2].TD * 5) + (fightHistory[2].SUB * 6) + (fightHistory[2].KD * 12) + (fightHistory[2].result === 'win' & fightHistory[2].round === '1' ? 50 : fightHistory[2].result === 'win' & fightHistory[2].round === '2' ? 40 : fightHistory[2].result === 'win' & fightHistory[2].round === '3' ? 30 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' & fightHistory[2].title_fight === '0' & fightHistory[2].time === '5:00' ? 10 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '5' & fightHistory[2].time !== '5:00' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '5' & fightHistory[2].time === '5:00' ? 10 : 0))
                setThirdFightScore((fightHistory[3].STR / 2) + (fightHistory[3].TD * 5) + (fightHistory[3].SUB * 6) + (fightHistory[3].KD * 12) + (fightHistory[3].result === 'win' & fightHistory[3].round === '1' ? 50 : fightHistory[3].result === 'win' & fightHistory[3].round === '2' ? 40 : fightHistory[3].result === 'win' & fightHistory[3].round === '3' ? 30 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' & fightHistory[3].title_fight === '0' & fightHistory[3].time === '5:00' ? 10 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '5' & fightHistory[3].time !== '5:00' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '5' & fightHistory[3].time === '5:00' ? 10 : 0))
                setFourthFightScore((fightHistory[4].STR / 2) + (fightHistory[4].TD * 5) + (fightHistory[4].SUB * 6) + (fightHistory[4].KD * 12) + (fightHistory[4].result === 'win' & fightHistory[4].round === '1' ? 50 : fightHistory[4].result === 'win' & fightHistory[4].round === '2' ? 40 : fightHistory[4].result === 'win' & fightHistory[4].round === '3' ? 30 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' & fightHistory[4].title_fight === '0' & fightHistory[4].time === '5:00' ? 10 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '5' & fightHistory[4].time !== '5:00' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '5' & fightHistory[4].time === '5:00' ? 10 : 0))
                setFifthFightScore((fightHistory[5].STR / 2) + (fightHistory[5].TD * 5) + (fightHistory[5].SUB * 6) + (fightHistory[5].KD * 12) + (fightHistory[5].result === 'win' & fightHistory[5].round === '1' ? 50 : fightHistory[5].result === 'win' & fightHistory[5].round === '2' ? 40 : fightHistory[5].result === 'win' & fightHistory[5].round === '3' ? 30 : fightHistory[5].result === 'win' & fightHistory[5].round === '4' & fightHistory[5].title_fight === '0' & fightHistory[5].time === '5:00' ? 10 : fightHistory[5].result === 'win' & fightHistory[5].round === '4' ? 20 : fightHistory[5].result === 'win' & fightHistory[5].round === '4' ? 20 : fightHistory[5].result === 'win' & fightHistory[5].round === '5' & fightHistory[5].time !== '5:00' ? 20 : fightHistory[5].result === 'win' & fightHistory[5].round === '5' & fightHistory[5].time === '5:00' ? 10 : 0))
              } else {
                setFirstFightScore((fightHistory[0].STR / 2) + (fightHistory[0].TD * 5) + (fightHistory[0].SUB * 6) + (fightHistory[0].KD * 12) + (fightHistory[0].result === 'win' & fightHistory[0].round === '1' ? 50 : fightHistory[0].result === 'win' & fightHistory[0].round === '2' ? 40 : fightHistory[0].result === 'win' & fightHistory[0].round === '3' ? 30 : fightHistory[0].result === 'win' & fightHistory[0].round === '4' & fightHistory[0].title_fight === '0' & fightHistory[0].time === '5:00' ? 10 : fightHistory[0].result === 'win' & fightHistory[0].round === '4' ? 20 : fightHistory[0].result === 'win' & fightHistory[0].round === '4' ? 20 : fightHistory[0].result === 'win' & fightHistory[0].round === '5' & fightHistory[0].time !== '5:00' ? 20 : fightHistory[0].result === 'win' & fightHistory[0].round === '5' & fightHistory[0].time === '5:00' ? 10 : 0))
                setSecondFightScore((fightHistory[1].STR / 2) + (fightHistory[1].TD * 5) + (fightHistory[1].SUB * 6) + (fightHistory[1].KD * 12) + (fightHistory[1].result === 'win' & fightHistory[1].round === '1' ? 50 : fightHistory[1].result === 'win' & fightHistory[1].round === '2' ? 40 : fightHistory[1].result === 'win' & fightHistory[1].round === '3' ? 30 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' & fightHistory[1].title_fight === '0' & fightHistory[1].time === '5:00' ? 10 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '4' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '5' & fightHistory[1].time !== '5:00' ? 20 : fightHistory[1].result === 'win' & fightHistory[1].round === '5' & fightHistory[1].time === '5:00' ? 10 : 0))
                setThirdFightScore((fightHistory[2].STR / 2) + (fightHistory[2].TD * 5) + (fightHistory[2].SUB * 6) + (fightHistory[2].KD * 12) + (fightHistory[2].result === 'win' & fightHistory[2].round === '1' ? 50 : fightHistory[2].result === 'win' & fightHistory[2].round === '2' ? 40 : fightHistory[2].result === 'win' & fightHistory[2].round === '3' ? 30 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' & fightHistory[2].title_fight === '0' & fightHistory[2].time === '5:00' ? 10 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '4' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '5' & fightHistory[2].time !== '5:00' ? 20 : fightHistory[2].result === 'win' & fightHistory[2].round === '5' & fightHistory[2].time === '5:00' ? 10 : 0))
                setFourthFightScore((fightHistory[3].STR / 2) + (fightHistory[3].TD * 5) + (fightHistory[3].SUB * 6) + (fightHistory[3].KD * 12) + (fightHistory[3].result === 'win' & fightHistory[3].round === '1' ? 50 : fightHistory[3].result === 'win' & fightHistory[3].round === '2' ? 40 : fightHistory[3].result === 'win' & fightHistory[3].round === '3' ? 30 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' & fightHistory[3].title_fight === '0' & fightHistory[3].time === '5:00' ? 10 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '4' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '5' & fightHistory[3].time !== '5:00' ? 20 : fightHistory[3].result === 'win' & fightHistory[3].round === '5' & fightHistory[3].time === '5:00' ? 10 : 0))
                setFifthFightScore((fightHistory[4].STR / 2) + (fightHistory[4].TD * 5) + (fightHistory[4].SUB * 6) + (fightHistory[4].KD * 12) + (fightHistory[4].result === 'win' & fightHistory[4].round === '1' ? 50 : fightHistory[4].result === 'win' & fightHistory[4].round === '2' ? 40 : fightHistory[4].result === 'win' & fightHistory[4].round === '3' ? 30 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' & fightHistory[4].title_fight === '0' & fightHistory[4].time === '5:00' ? 10 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '4' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '5' & fightHistory[4].time !== '5:00' ? 20 : fightHistory[4].result === 'win' & fightHistory[4].round === '5' & fightHistory[4].time === '5:00' ? 10 : 0))
              }
       } catch (error) {
        console.log(error)
       }
    }
    // <li key={idx}>{f.event}</li>
    // <li key={(idx + 1) * Math.random()*7} >{f.method} against {f.opponent} Result: {f.result === 'win' ? `Won fight` : `Lost fight`}</li>
    // <li key={(idx + 1) * Math.random()*8}>Strikes {f.STR}: {f.STR / 2} points </li>
    // <li key={(idx + 1) * Math.random()*9}>Takedowns {f.TD}: {f.TD * 5} points </li>
    // <li key={(idx + 1) * Math.random()*10}>Sub Attempts {f.SUB}: {f.SUB * 6} points </li>
    // <li key={(idx + 1) * Math.random()*11}>Knocks {f.KD}: {f.KD * 12} points </li>
    // <li key={(idx + 1) * Math.random()*12} style={{ fontWeight: 'bold'}}> {f.STR / 2 + f.TD * 5 + f.KD * 12} total before bonus of: 
    // {f.result === 'win' & f.round === '1' ? ` 50 Points - Rnd 1 W` : ''}
    // {f.result === 'win' & f.round === '2' ? ` 40 Points - Rnd 2 W` : ''}
    // {f.result === 'win' & f.round === '3' & f.time !== '5:00' ? ` 30 Points Rnd 3 W` : ''}
    // {f.result === 'win' & f.round === '3' & f.title_fight === '0' & f.time === '5:00' ? ` 10 Points - 3rd rd DEC W` : ''}
    // {f.result === 'win' & f.round === '4' ? ` 20 Points - Rnd 4 W` : ''}
    // {f.result === 'win' & f.round === '5' & f.time !== '5:00' ? ` 20 Points - Rnd 5 W` : ''}
    // {f.result === 'win' & f.round === '5' & f.time === '5:00' ? ` 10 Points -  DEC W` : ''}
    // {f.result !== 'win' ? ` Nothing` : ''}</li>
    // <li key={(idx + 1) * Math.random() *13}> </li>

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
                        aria-label = 'three-dots-loading'     
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
                        {/* <div>
                            {firstFightScore ? firstFightScore : ''}
                        </div>
                        <div>
                            {secondFightScore ? secondFightScore : ''}
                        </div>
                        <div>
                            {thirdFightScore ? thirdFightScore : ''}
                        </div>
                        <div>
                            {fourthFightScore ? fourthFightScore : ''}
                        </div>
                        <div>
                            {fifthFightScore ? fifthFightScore : ''}
                        </div> */}
                        <div style={{fontWeight: 'bold'}}>
                            {firstFightScore ? `Last 5 Avg: ${(firstFightScore + secondFightScore + thirdFightScore + fourthFightScore + fifthFightScore) / 5}`  : ''}
                        </div>
                        <div style={{ paddingTop: '2rem'}}>
                            {firstFightScore ? `Fight History Breakdown:` : ''}
                        </div>
                    <ul>
                        {fightHistory ? fightHistory.map((f, idx) => {
                            return (
                                <>
                                <li key={idx}>{f.event}</li>
                                <li key={(idx + 1) * Math.random()*7} >{f.method} against {f.opponent} Result: {f.result === 'win' ? `Won fight` : `Lost fight`}</li>
                                <li key={(idx + 1) * Math.random()*8}>Strikes {f.STR}: {f.STR / 2} points </li>
                                <li key={(idx + 1) * Math.random()*9}>Takedowns {f.TD}: {f.TD * 5} points </li>
                                <li key={(idx + 1) * Math.random()*10}>Sub Attempts {f.SUB}: {f.SUB * 6} points </li>
                                <li key={(idx + 1) * Math.random()*11}>Knocks {f.KD}: {f.KD * 12} points </li>
                                <li key={(idx + 1) * Math.random()*12} style={{ fontWeight: 'bold'}}> {f.STR / 2 + f.TD * 5 + f.KD * 12} total before bonus of: 
                                {f.result === 'win' & f.round === '1' ? ` 50 Points - Rnd 1 W` : ''}
                                {f.result === 'win' & f.round === '2' ? ` 40 Points - Rnd 2 W` : ''}
                                {f.result === 'win' & f.round === '3' & f.time !== '5:00' ? ` 30 Points Rnd 3 W` : ''}
                                {f.result === 'win' & f.round === '3' & f.title_fight === '0' & f.time === '5:00' ? ` 10 Points - 3rd rd DEC W` : ''}
                                {f.result === 'win' & f.round === '4' ? ` 20 Points - Rnd 4 W` : ''}
                                {f.result === 'win' & f.round === '5' & f.time !== '5:00' ? ` 20 Points - Rnd 5 W` : ''}
                                {f.result === 'win' & f.round === '5' & f.time === '5:00' ? ` 10 Points -  DEC W` : ''}
                                {f.result !== 'win' ? ` Nothing` : ''}</li>
                                <li key={(idx + 1) * Math.random() *13}> </li>
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