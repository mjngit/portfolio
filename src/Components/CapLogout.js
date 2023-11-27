import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';



const CapLogout = ()=> {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _logout = (user) => {
        dispatch(logout(user))
        navigate('/capstone/login')
    }

  return (
    <>
    <PortfolioNav/>
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        {
        auth.id ? (
            <div>
                

                <div className='flex justify-center pt-20'>
                <div className=" px-8 py-6 rounded-lg bg-gray-800 w-72">
                <h1 className="text-center font-bold text-3xl text-white">Are You Sure?</h1>
                <h4 className="text-center text-xl text-white py-5"> Logged in as {auth.username}</h4>
                    <button onClick={(user)=> (_logout(user))} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Logout</button>
                
                </div>
                </div>
                <div  className='py-40'></div>
            </div>
        )  : (

            <div >
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>You're Not Logged In!</h2>
                
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Button sx={{width: 100}} onClick={()=> navigate('/capstone/register')}>Register</Button>
                
                <Button sx={{width: 100}} onClick={()=> navigate('/capstone/login')}>Login</Button>
                    {/* <Link to={`/register`}>Register Here</Link> or <Link to='/login'> Login </Link> */}
                </div>
            </div>
           
        )
        } 
    
    </div>
    <FooterNav/>
    </>
  );
};

export default CapLogout;