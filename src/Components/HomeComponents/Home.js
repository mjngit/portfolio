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
      <Link to='../java/menu'>
      <img src='static\images\coffee_cup_illustration_blue.jpeg' style={{width: '110%'}}></img>  
      </Link>
      <SubNavHome/>

      
       { (!auth.id) ? 
     (
      <div >   

        <div id="homepage"> 
          <h2>Welcome! Please log in as U: moe PW: 123 or register for the best experience, but feel free to browse!</h2>
        
        <div>
          <Link to={`/java/menu`}><button className="loginButton">Menu</button></Link>
        </div>  
          
        </div>

        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
          <Button variant='outlined'><Link to={`/capstone/register`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/capstone/login' style={{fontSize: '1.2rem', fontWeight:'500'}}> Login </Link></Button>
        </div> */}

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
                  
                  <div style={{ padding: '2rem'}}>
                  <Link to={`/capstone/register`}><button className="loginButton">Register</button></Link> 
                  </div>

                  <div>
                  <Link to={`/capstone/login`}><button className="loginButton">Login</button></Link>
                  </div>
              </div>

        <div id="homepageImage"/>
      
      </div>

        )  : (

          
        <div id="homepage">           
          <h1 style={{ paddingBottom: '2rem'}}>Welcome, {auth.username}!</h1>

          <div>
            <Link to={`/java/menu`}><button className="loginButton">Menu</button></Link>
          </div>  

            <div style={{ padding: '8rem'}}>
              
                {
                  auth.adminStatus === true ? 
                  (<div><Link to='/admin'>Admin Tools</Link></div>) : 
                  (<div >
                    Please browse amongst our delicious selection of drinks or our fashionable merch.
                    <br/>
                    <Link to='/java/reviews'>Create And See Your Reviews</Link>
                    <br/>
                    <Link to='/java/reviews/all'>Read Our Reviews({reviews.length})</Link>
                    </div>)
                  }

            </div>
          
        </div>
        
        )
        } 

      <FooterNav/>
    </>
  );
};

export default Home;
