import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import DrinkProducts from '../DrinkComponents/DrinkProducts';

function SubNavHome() {
 
  return (
    <div id='subnav'>
    <AppBar position="static"
    style={{ background: '#029987' }}>
      <Container sx={{ 
        maxWidth: "xl"
        }}>

        <Toolbar disableGutters>

        <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              flexWrap: "wrap",
              wordWrap: "normal",
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',

            }}
          >
            <Link to='../java/menu/' element={<DrinkProducts/>} style={{ textDecoration: 'none', color: 'inherit', }}>Check out our products here!</Link>
          </Typography>


          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              flexGrow: 1,
              flexWrap: "wrap",
              wordWrap: "normal",
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >           
            <Link to='../java/menu/' element={<DrinkProducts/>} style={{ textDecoration: 'none', color: 'inherit' }}>Free shipping on orders $50 or more! Check out our selection of drinks and merch here!</Link>
          </Typography>


        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default SubNavHome;
