import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';
import { logout } from '../store';
import { Link, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

import { removeFromCart, addToCart } from '../store';



const Checkout = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = cart.lineItems;

  const [customer, setCustomer] = useState('')
  const { auth } = useSelector(state => state);

  const pay = async(ev)=> {
    ev.preventDefault();
    const orderNum = Math.floor(Math.random()*1000000)
    products.forEach(product => {
      dispatch(removeFromCart(product.product, product.quantity))
    })
    navigate(`/java/order/${orderNum}`)
  };
  
  return (
    <div>
      <PortfolioNav/>
      <div style={{ display: 'grid', gridTemplateColumns: '800px 800px',}}>
        <div id="checkoutPageCart">
        <h1>Shopping Cart</h1>

          {products.sort((a, b) => a.createdAt.localeCompare(b.createdAt)).map(prod => {
            return (
          <Accordion key={prod.id} sx={{ minWidth: 200, maxWidth: 800 }} disableGutters >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography>{prod.quantity} - {prod.product.name}, ${prod.product.price} Each</Typography>
            </AccordionSummary>
          </Accordion>
            )})}
        </div>

        <div id="checkoutPageForm">
          <form onSubmit={ pay }>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="First Name" variant="outlined" value={ customer.firstName } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Last Name" variant="outlined" value={ customer.lastName  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Address" variant="outlined" value={ customer.address  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Phone" variant="outlined" value={ customer.zip  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="E-mail" variant="outlined"  value={ customer.email  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Phone" variant="outlined" value={ customer.phone  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Credit Card" variant="outlined" value={ customer.creditCard  } onChange={ev => setCustomer(ev.target.value)}/>
            <TextField style={{ margin: 4, backgroundColor:"white" }}  label="Security Code" variant="outlined"  value={ customer.securityCode  } onChange={ev => setCustomer(ev.target.value)}/>

            <Button onClick={ pay } sx={{fontSize: '1.5rem'}}>Place Order!</Button>
          </form>
        </div>
      </div>
      <FooterNav/>
    </div>
  )
}

export default Checkout