import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import SubNavHome from './SubNavHome';
import PortfolioNav from '../PortfolioNav'
import FooterNav from '../FooterNav'


const Home = ()=> {
  const { auth, reviews } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <PortfolioNav/>
      <img src='static\images\coffee_cup_illustration_blue.jpeg' style={{width: '110%'}}></img>   
      <SubNavHome/>

      
       { (!auth.id) ? 
     (
      <div >   

        <div id="homepage"> 
          <h2>Welcome! Please log in to place an order, but feel free to browse!</h2>
        <Button variant='outlined'><Link to={`/capstone/register`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/capstone/login' style={{fontSize: '1.2rem', fontWeight:'500'}}> Login </Link></Button>
        </div>

        <div id="homepageImage"/>
      <FooterNav/>
      </div>

        )  : (

          <div id="homepage">           
          <h1>Welcome, {auth.username}!</h1>
          <div>
            
              {
                auth.adminStatus === true? 
                (<div><Link to='/admin'>Admin Tools</Link></div>): 
                (<div>
                  Please browse amongst our delicious selection of drinks or our fashionable merch.
                  <br/>
                  <Link to='/reviews'>Create And See Your Reviews</Link>
                  <br/>
                  <Link to='/reviews/all'>Read Our Reviews({reviews.length})</Link>
                  </div>)
                }

          </div>
          <FooterNav/>
        </div>
    
        )
        } 

  
    </>
  );
};

export default Home;
