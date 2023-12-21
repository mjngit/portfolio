import React, { useEffect, useRef } from 'react';
import Home from './HomeComponents/Home';
import PortHome from './HomeComponents/PortHome';
import Login from './Login';
import Cart from './Cart';
import Checkout from './Checkout';
import Order from './Order';
import Register from './Register';
import Nav from './Nav';
import PortfolioNav from './PortfolioNav';
import FooterNav from './FooterNav';
import DrinkProducts from './DrinkComponents/DrinkProducts';
import DrinksCoffees from './DrinkComponents/DrinksCoffees';
import DrinksTeas from './DrinkComponents/DrinksTeas';
import DrinksSmoothies from './DrinkComponents/DrinksSmoothies';
import DrinkProductPage from './DrinkComponents/DrinkProductPage';
import Merches from './MerchComponents/Merches';
import Merch from './MerchComponents/Merch';
import MerchShirts from './MerchComponents/MerchShirts';
import MerchHats from './MerchComponents/MerchHats';
import MerchMugs from './MerchComponents/MerchMugs';
import Account from './Account';
import About from './About/About';
import AboutV2 from './About/AboutV2';
import AboutLocations from './About/AboutLocations';
import AboutCareers from './About/AboutCareers';
import AboutContact from './About/AboutContact';
import Logout from './Logout';
import Review from './Review'
import ReviewsAll from './ReviewsAll';
import HomeV2 from './HomeComponents/HomeV2';
import ProjectsHome from './HomeComponents/ProjectsHome';

import FightersOfTheWeek from './FightersOfTheWeek'
import Present from './Present'
import TripAi from './TripAi'
import HappyNotes from './HappyNotes'
import HappyNoteAdd from './HappyNoteAdd'

import Admin from './Admin/Admin';
import NotAdmin from './Admin/NotAdmin';
import AdminDrinksMain from './Admin/AdminDrinksMain';
import AdminDrinksCreate from './Admin/AdminDrinksCreate';
import AdminDrinksDrink from "./Admin/AdminDrinksDrink";
import AdminMerch from './Admin/AdminMerchesMain';
import CreateMerch from './Admin/AdminMerchsCreate';
import AdminMerchesMerch from './Admin/AdminMerchesMerch';
import AdminOther from './Admin/AdminOther';

import CapLogin from './CapLogin';
import CapLogout from './CapLogout';
import CapAccount from './CapAccount';
import CapHome from './CapHome';
import Profile from './Profile';
import Employment from './Employment';
import CapRegister from './CapRegister';
// import Stocks from './Stocks';
import Launch from './Launch'
import Graphs from './Graphs'
import Financials from './Financials';
import Finalize from './Finalize';
import RiskAssessment from './RiskAssessment';
import BuyStock from './BuyStock';
import Chats from './Chats';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Deposit from './Deposit';

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchAssessments, fetchOnlineUsers, fetchMessages, fetchStocks, fetchUsers,fetchPortfolio, fetchTransactions, fetchFriends, fetchHypes } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

import { fetchCart, fetchDrinks, fetchMerches, fetchUserReviews, fetchFighters } from '../store';
import { fetchHappyNotes } from '../store/happyNotes';




const App = ()=> {
  // const { auth } = useSelector(state => state);
  const { auth, onlineUsers, messages, users, friends } = useSelector(state => state);
  const dispatch = useDispatch();
  // const prevAuth = useRef({});
  const prevAuth = useRef(auth);

  useEffect(()=>{
    dispatch(fetchDrinks());
    dispatch(fetchMerches());
    dispatch(fetchFighters());
    dispatch(loginWithToken());
    dispatch(fetchAssessments());
    dispatch(fetchStocks());
    dispatch(fetchUsers());
    dispatch(fetchTransactions());
    dispatch(fetchHappyNotes());
  }, [])
  
  useEffect(()=>{
    if(!prevAuth.current.id && auth.id){
      //check messages
      dispatch(fetchPortfolio())
      dispatch(fetchMessages())
      dispatch(fetchFriends())
      dispatch(fetchHypes())
      console.log('you just logged in');
      window.socket = new WebSocket(window.location.origin.replace('http', 'ws'));
      window.socket.addEventListener('open', () => {
        window.socket.send(JSON.stringify({ token: window.localStorage.getItem('token')}))
      })
      window.socket.addEventListener('message', (ev) => {
        const message = JSON.parse(ev.data)
        if(message.type){
          dispatch(message)
        }
        console.log(message)
      })
      dispatch(fetchOnlineUsers());
    }
    if(prevAuth.current.id && !auth.id){
      console.log('you just logged out')
      window.socket.close()
    }
  }, [auth])

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchUserReviews());
    }
  }, [auth]);

  useEffect(()=> {
    if(!prevAuth.current.id && auth.id){
      dispatch(fetchCart());
    }
    if(prevAuth.current.id && !auth.id){
      console.log('logged out')
    }
  }, [auth]);

  useEffect(()=> {
    prevAuth.current = auth
  })

  return (
    <div >
      
      
      
      {/* <PortfolioNav />     */}
        {/* original color of this image is #7CC9D1 */}

        <div className='app-body'>  

            <Routes>
              <Route path='/' element={ <HomeV2 /> } />
              <Route path='/portfolio/home' element={ <ProjectsHome /> } />
              <Route path='/portfolio/account' element={ <CapAccount /> } />
              <Route path='/portfolio/cart' element={ <Cart /> } />
              <Route path='/portfolio/login' element={ <CapLogin /> } />
              <Route path='/java/home' element={ <Home /> } />
              <Route path='/portfolio/e-commerce' element={ <Home /> } />
              <Route path='/java/cart' element={ <Cart /> } />
              <Route path='/java/checkout' element={ <Checkout /> } />
              <Route path='/java/order/:id' element={ <Order /> } />
              <Route path='/portfolio/happyNotes' element={ <HappyNotes /> } />
              <Route path='/portfolio/addHappyNote' element={ <HappyNoteAdd /> } />

              {auth.adminStatus === true ? <Route path='/admin' element= { <Admin /> }/> : <Route path='/admin' element= { <NotAdmin /> }/>}
              <Route path='/admin/drinks' element= { <AdminDrinksMain />} />
              <Route path= '/admin/drinks/:id' element= { <AdminDrinksDrink /> } />
              <Route path='/admin/drinks/create' element = { <AdminDrinksCreate /> } />
              <Route path='/admin/merch' element = { <AdminMerch /> } />
              <Route path='/admin/merch/create' element = { <CreateMerch /> } />
              <Route path='/admin/merch/:id' element = { <AdminMerchesMerch /> } />
              <Route path='/admin/other' element = { <AdminOther /> } />


              <Route path='/java/menu' element={ <DrinkProducts /> } />
                <Route path='/java/menu/coffee' element={<DrinksCoffees />}/>
                <Route path='/java/menu/tea' element={<DrinksTeas />}/>
                <Route path='/java/menu/smoothies' element={<DrinksSmoothies />}/>
                <Route path='/java/menu/:id' element={ <DrinkProductPage /> } />
              <Route path='/java/merch' element={ <Merches /> } />
                <Route path='/java/merch/shirts' element={<MerchShirts />}/>
                <Route path='/java/merch/hats' element={<MerchHats />}/>
                <Route path='/java/merch/mugs' element={<MerchMugs />}/>
              <Route path='/java/merch/:id' element={ <Merch /> } />

              <Route path='/stackathon/fighters' element={ <FightersOfTheWeek /> } />
              <Route path='/stackathon/trip' element={ <TripAi /> } />
              <Route path='/stackathon/present' element={ <Present /> } />
              <Route path='/portfolio/stackathon' element={ <Present /> } />

              <Route path='/capstone/login' element={ <CapLogin /> } />
              <Route path='/capstone/logout' element={ <CapLogout /> } />
              <Route path='/capstone/home' element={ <CapHome /> } />
              <Route path='/portfolio/capstone' element={ <CapHome /> } />
              <Route path='/portfolio/homev2' element={ <ProjectsHome /> } />
              <Route path='/portfolio/projects' element={ <ProjectsHome /> } />
              {/* SWITCH BACK TO HOMEV2 ONCE TAILWIND BACK */}

              {/* <Route path='/home' element={ <Home /> } /> */}

              
              <Route path='/capstone/account' element={ <Profile /> } />
              <Route path='/capstone/accountSetup' element={ <CapAccount /> } />
              <Route path='/capstone/employment' element={ <Employment /> } />
              <Route path='/capstone/register' element={ <CapRegister /> } />
              {/* <Route path='/capstone/stocks' element={ <Stocks /> } /> */}
              <Route path='/capstone/financials' element={ <Financials />} />
              <Route path='/capstone/finalize' element={ <Finalize />} />
              <Route path='/capstone/launch' element={ <Launch />} />
              <Route path='/capstone/stocks/:stockTicker' element={ <Graphs />} />
              <Route path='/capstone/buy/:ticker' element={ <BuyStock />} />
             
              <Route path='/capstone/riskAssessment/:id' element={ <RiskAssessment />} />
              <Route path='/capstone/chats' element={ <Chats />} />
              <Route path='/capstone/portfolio' element={ <Portfolio />} />
              <Route path='/capstone/deposit' element={ <Deposit />} />
              

    {
      !!auth.id && <Route path='/java/reviews' element={ <Review />} />
    }
            <Route path='/java/reviews/all' element={ <ReviewsAll />} />
              <Route path='/java/reviews/:id' element={ <Review />} />

              <Route path='/java/register' element={ <Register />} />
              <Route path='/java/login' element={ <CapLogin />} />
              <Route path='/java/logout' element={ <CapLogout /> } />
              <Route path='/java/account' element={ <Account /> } />
              <Route path='/java/about' element={ <AboutV2 /> } />
              <Route path='/java/about/locations' element={<AboutLocations />}/>
              <Route path='/java/about/careers' element={<AboutCareers />}/>
              <Route path='/java/about/contact' element={<AboutContact />}/>
              <Route path='/java/menu/search/:filterString' element = { < DrinkProducts />} />
              <Route path='/java/merch/search/:filterString' element = { < Merches />} />
            </Routes>
            
          </div>
    
         {/* <FooterNav /> */}
    </div>
    // </div>  
  );
};

export default App;





// const App = ()=> {
  
//   const dispatch = useDispatch();
//   const prevAuth = useRef(auth);

//   useEffect(()=> {
//     dispatch(loginWithToken());
//     dispatch(fetchAssessments());
//     dispatch(fetchStocks());
//     dispatch(fetchUsers());
//     dispatch(fetchTransactions())
//   }, []);
  
//   useEffect(()=>{
//     if(!prevAuth.current.id && auth.id){
//       //check messages
//       dispatch(fetchPortfolio())
//       dispatch(fetchMessages())
//       dispatch(fetchFriends())
//       dispatch(fetchHypes())
//       console.log('you just logged in');
//       window.socket = new WebSocket(window.location.origin.replace('http', 'ws'));
//       window.socket.addEventListener('open', () => {
//         window.socket.send(JSON.stringify({ token: window.localStorage.getItem('token')}))
//       })
//       window.socket.addEventListener('message', (ev) => {
//         const message = JSON.parse(ev.data)
//         if(message.type){
//           dispatch(message)
//         }
//         console.log(message)
//       })
//       dispatch(fetchOnlineUsers());
//     }
//     if(prevAuth.current.id && !auth.id){
//       console.log('you just logged out')
//       window.socket.close()
//     }
//   }, [auth])

//   useEffect(()=>{
//     prevAuth.current = auth
//   })

//   return (
//     <div>
      
//           <div>
//             <NavBar sx={{ bgcolor: "green" }}/>
           
//             <Routes>
//               <Route path='/login' element={ <Login /> } />
//               <Route path='/logout' element={ <Logout /> } />
//               <Route path='/' element={ <Home /> } />
//               <Route path='/home' element={ <Home /> } />
//               <Route path='/account' element={ <Profile /> } />
//               <Route path='/accountSetup' element={ <Account /> } />
//               <Route path='/employment' element={ <Employment /> } />
//               <Route path='/register' element={ <Register /> } />
//               <Route path='/stocks' element={ <Stocks /> } />
//               <Route path='/financials' element={ <Financials />} />
//               <Route path='/finalize' element={ <Finalize />} />
//               <Route path='/launch' element={ <Launch />} />
//               <Route path='/stocks/:stockTicker' element={ <Graphs />} />
//               <Route path='/buy/:ticker' element={ <BuyStock />} />
             
//               <Route path='/riskAssessment/:id' element={ <RiskAssessment />} />
//               <Route path='/chats' element={ <Chats />} />
//               <Route path='/portfolio' element={ <Portfolio />} />
//               <Route path='/deposit' element={ <Deposit />} />
//             </Routes>
//           </div>
      
//     </div>
//   );
// };

