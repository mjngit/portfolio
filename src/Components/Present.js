import React, {useState}from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { OPENAI_API_KEY } from '../../secrets';
import { Audio } from  'react-loader-spinner';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';


const Present = () => {
    const [age, setAge] = useState('')
    const [minPrice, setMinPrice] = useState(25)
    const [maxPrice, setMaxPrice] = useState(50)
    const [interest1, setInterest1] = useState('')
    const [interest2, setInterest2] = useState('')
    const [interest3, setInterest3] = useState('')
    const [gift, setGift] = useState([])
    const [loading, setLoading] = useState(false);



    const submit = async (e) => {
    e.preventDefault()
    setLoading(true);
        
       try {
         console.log('submitted')
        const response =  await axios.post('https://api.openai.com/v1/chat/completions',
{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": `Please give me 3 birthday gift ideas with links to buy them for a ${age} year old interested in ${interest1}, ${interest2}, and ${interest3} between ${minPrice} and ${maxPrice} USD?`}],
     "temperature": 0.7
   },
{ headers: 
 { Authorization: `Bearer ${OPENAI_API_KEY}`,
 organization: "org-ED6jkoSYo0F2euGczF01T5sv"}
})

let string = response.data.choices[0].message.content

const urls = string.match(/\bhttps?:\/\/\S+/gi);

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    maxWidth: '1280px', 
    gap: '2rem', 
    paddingTop: '2rem', 
    paddingBottom: '2rem', 
    paddingLeft: '4rem', 
    paddingRight: '4rem',
    borderRadius: '1rem'
}

setGift(urls.map(url => {
  const found = string.indexOf(url)
  const name = string.slice(0, found);
  const substring = `${name}${url}`;
  string = string.slice(substring.length);
  
  return {
    name: name.replace('\n', ''),
    url,
  }
})
)
setLoading(false)

       } catch (error) {
        console.log(error)
       }
    }

    return (
        <>
          <PortfolioNav/>
          <div>
          
                {/* <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Birthday Present Generator</h1> */}
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.0 rem', lineHeight: '2.25rem', fontWeight: 'bold', paddingTop: '2rem'}}><h1>Birthday Present Generator</h1></div>
                {/* <form onSubmit={ submit } style={{ display: 'flex' }}>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Age" variant="outlined" value={ age } onChange={ev => setAge(ev.target.value)} />
                  <div style={{ marginBottom: 8 }}/>
                  <div style={{ flexDirection: 'row' }}>
                  <TextField label="Min Price" variant="outlined" value={ minPrice } onChange={ev => setMinPrice(ev.target.value)} style={{ justifyContent: 'space-between', width: "50%" }}/>
                  
                  <TextField label="Max Price" variant="outlined" value={ maxPrice } onChange={ev => setMaxPrice(ev.target.value)} style={{ justifyContent: 'space-between',  width: "50%" }}/>
                  </div>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="First Interest" variant="outlined"  value={ interest1 } onChange={ev => setInterest1(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Second Interest" variant="outlined" value={ interest2 } onChange={ev => setInterest2(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Third Interest" variant="outlined" value={ interest3 } onChange={ev => setInterest3(ev.target.value)}/>
      
                  <Button onClick={ submit } disabled={ !age || !minPrice || !maxPrice || !interest1 || !interest2}>Generate Birthday Present</Button>
                </form> */}

                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32" style={{display: 'grid', gridTemplateColumns: '32rem 32rem', maxWidth: '1280px', gap: '2rem', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem', borderRadius: '1rem'}}>
                    <div className="flex flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '35rem'}}>
                        <div className="space-y-2" style={{  paddingTop: '.5rem', paddingBottom: '.5rem'}}>
                            <h2 className="text-4xl font-bold leadi lg:text-5xl" style={{ fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: 'bold' }}>Drawing a Blank?</h2>
                            <h4 className="dark:text-gray-400" style={{ fontSize: '1.5rem', lineHeight: '1.75rem'}}>Fill in the info about your friend or loved one and let AI do the rest! Keep in mind the present links are likely outdated but the ideas remain top notch and great starting points for your brainstorm!</h4>
                        </div>
                        <img src="static/images/cakepresents.png" alt="Birthday Cake & Presents" className="p-6 h-52 md:h-64" style={{ display: 'flex', padding: '1.5rem', height: '12rem', width: '60%', height: '60%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}} />
                    </div>
                    <form onSubmit={ submit } novalidate="" className="space-y-6" style={{ marginLeft:' 1.5rem', width: '40rem', column: '2'}} >
                        <div>
                            <label for="name" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Age</label>
                            <input value={ age } onChange={ev => setAge(ev.target.value)} id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}} />
                            {/* <TextField label="Age" variant="outlined" value={ age } onChange={ev => setAge(ev.target.value)} /> */}
                        </div>
                        <div>
                            <label for="minPrice" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Min Price</label>
                            <input value={ minPrice } onChange={ev => setMinPrice(ev.target.value)} id="minPrice" type="number" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}} />

                            <label for="maxPrice" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Max Price</label>
                            <input value={ maxPrice } onChange={ev => setMaxPrice(ev.target.value)} id="maxPrice" type="number" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}} />
                            {/* <TextField label="Min Price" variant="outlined" value={ minPrice } onChange={ev => setMinPrice(ev.target.value)} style={{ justifyContent: 'space-between', width: "50%" }}/>
                  
                            <TextField label="Max Price" variant="outlined" value={ maxPrice } onChange={ev => setMaxPrice(ev.target.value)} style={{ justifyContent: 'space-between',  width: "50%" }}/> */}
                        </div>
                        <div>
                            <label for="interest1" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Interest 1</label>
                            <textarea value={ interest1 } onChange={ev => setInterest1(ev.target.value)} id="interest1" rows="1" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}}></textarea>
                        </div>
                        <div>
                            <label for="interest2" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Interest 2</label>
                            <textarea value={ interest2 } onChange={ev => setInterest2(ev.target.value)} id="interest2" rows="1" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}}></textarea>
                        </div>
                        <div>
                            <label for="interest3" className="text-sm" style={{fontSize: '0.875rem', lineHeight: '1.25rem'}}>Interest 3</label>
                            <textarea value={ interest3 } onChange={ev => setInterest3(ev.target.value)} id="interest3" rows="1" className="w-full p-3 rounded dark:bg-gray-800 text-white" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '24'}}></textarea>
                        </div>
                        <button type="submit" className="loginButton w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-lime-400 dark:text-gray-900" style={{ width: '100%', padding: '.5rem', borderRadius: '.25rem', fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: 'bold', background: 'blue'}}>Generate Gift Ideas</button>
                    </form>
                </div> 
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
                        src='static/corgi-sprite.gif'
                        ariaLabel = 'three-dots-loading'     
                    ></img> : ''} 
                    </div>
                {gift.map((gift, idx) => <div key={idx}><a href={gift.url}  target={'_blank'}>{gift.name}</a></div>)
                }
          </div>
          <div className='pt-44' style={{ paddingTop: '12rem'}}></div>
          <FooterNav/>
        </>
    )
}

export default Present;
