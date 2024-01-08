import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const Crush = () => {
 
  return (
    <div>
      <PortfolioNav/>
      
      
      <FooterNav/>
    </div>
  );
};

export default Crush;