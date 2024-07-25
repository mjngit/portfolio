import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Crushyes = () => {

  return (
    <div>
      <PortfolioNav/>
        <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', marginTop: '15rem', marginBottom: '15rem'}}>
            <img src='static/hugspin.gif' style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center'}}/>
        </div>
      <FooterNav/>
    </div>

  );
};

export default Crushyes;