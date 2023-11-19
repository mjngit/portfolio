// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addHappy } from '../store';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';



const HappyNotes = () => {
    const { happyNotes, users } = useSelector(state => state)
    const [isDisabled, setIsDisabled] = useState(false); 
    const dispatch = useDispatch();

    const like = async(happyNote) => {
        setIsDisabled(true)
        await dispatch(addHappy(happyNote))

    }

    const styles = {
        button: {
          padding: '10px 30px',
          cursor: 'pointer',
        },
        buttonDisabled: {
          padding: '10px 30px',
          cursor: 'not-allowed',
        },
      };

    return (
    <div>
        <PortfolioNav/>
    <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', marginBottom: 10}}>Happy Notes</h1>
        <ul>
            {
                happyNotes.map(happyNote => {
                    const user = users.find( user => user.id === happyNote.userId)
                
                return (
                    <li key={happyNote.id} style={{ listStyle: 'none', marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" color="text.primary" gutterBottom>
                                    {happyNote.subject}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Posted by {user ? user.username : 'unknown'} on {new Date(happyNote.createdAt).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body1">
                                    {happyNote.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                    <Button size="small" onClick={(ev) => { like(happyNote); ev.target.disabled = true }}>Lovely!</Button>
                                    {/* <button style={isDisabled ? styles.buttonDisabled : styles.plusButton} disabled={isDisabled} size="small" tabindex="0" className="plusButton" onClick={(ev) => { like(happyNote); ev.target.disabled = true }}>
                                        <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                            <g mask="url(#mask0_21_345)">
                                            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                                            </g>
                                        </svg>
                                    </button> */}
                                   
                                    <span style={{ marginLeft: '10px', fontSize: '14px', color: '#777' }}>
                                        {happyNote.happies === 1 ? `This has made ${happyNote.happies} person happy so far` : `This has made ${happyNote.happies} people happy so far`}
                                    </span>
                                </div>
                            </CardActions>
                        </Card>
                    </li>
                )
                                            }
                                )
            }
        </ul>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
            <Button variant='outlined'><Link to={`/portfolio/addHappyNote`} style={{fontSize: '1.2rem', fontWeight:'500' }}>Add Happy Note</Link></Button>
        </div>
        <FooterNav/>
    </div>
    )
}

export default HappyNotes