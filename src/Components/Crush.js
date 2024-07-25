import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Crush = () => {
 
  const [position, setPosition] = useState({ top: '50%', left: '55%' });

  const handleMouseEnter = () => {
    const x = Math.random() * (window.innerWidth - 100); // subtracting 100 to keep the button within the viewport
    const y = Math.random() * (window.innerHeight - 50); // subtracting 50 to keep the button within the viewport
    setPosition({ top: `${y}px`, left: `${x}px` });
  };


  return (
    <div>
      <PortfolioNav/>
        <div>
        <div style={{ marginTop: '20rem'}}></div>
          <div style={{ position: 'absolute', top: '40%', left: '40%'}}>
            
            <h1>Do you wanna go out with me?</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            
            <h1> </h1>
          </div>
          <div style={{ position: 'absolute', top: '60%', left: '41%'}}>
            
            <img src='static/cute-waiting.gif' />
          </div>
          <div >
            
          
            
              <Button id='yesBtn' style={{position: 'absolute', top: '50%', left: '40%'}}><Link to={'/crush/yes'}>Yes!</Link></Button>
              
              <Button
                className="move-button"
                onMouseEnter={handleMouseEnter}
                style={{ position: 'absolute', top: position.top, left: position.left }}
              >
                No
              </Button>
            
          </div>
        </div>
        <div style={{ marginTop: '20rem', marginBottom: '5rem'}}></div>
      
      <FooterNav/>
    </div>
  );
};

export default Crush;