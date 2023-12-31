import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createHappyNote } from '../store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';


const PostAdd = () => {
    const { auth, users, happyNotes } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const userId = auth.id

    const createNote = async (ev) => {
        ev.preventDefault()
        await dispatch(createHappyNote({userId, subject, content}))
        navigate('/portfolio/happyNotes')
    }

    return (
        <>
        <PortfolioNav/>
        { (!auth.id) ? 
            (
             <div id="homepage">   
       
               <div> 
                <h2>Welcome! Please log in to post a Happy Note!</h2>
                <Button variant='outlined'><Link to={`/capstone/register`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/capstone/login' style={{fontSize: '1.2rem', fontWeight:'500'}}> Login </Link></Button>
               </div>
       
              
       
             </div>
       
               )  : (
       
                <div id="homepage">           
                    <div>
                        <form onSubmit={ createNote }>
                            {/* <input value={ subject } onChange={(ev)=> setSubject(ev.target.value)} placeholder='Subject' /> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Title" variant="standard" value={ subject } onChange={(ev)=> setSubject(ev.target.value)} />
                            </Box>
                            {/* <input className='content' value={ content } onChange={(ev)=> setContent(ev.target.value)} placeholder='Enter Your Post Content' /> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            
                                <TextField
                                    value={ content } onChange={(ev)=> setContent(ev.target.value)} placeholder='Enter Your Post Content'
                                    id="standard-multiline-static"
                                    label="New Happy Note"
                                    multiline
                                    rows={4}
                                    variant='standard'
                                />
                            </Box>
                            <button style={{ width: '10rem' }} onClick={ createNote } className="loginButton">Add Your Post!</button> 
                        </form>
                    </div>
                </div>
           
               )
               } 
        <FooterNav/>
       </>
    )
}

export default PostAdd;