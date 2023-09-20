

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ShoppingCartSharp } from "@mui/icons-material";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useNavigate, Link } from "react-router-dom";
import SearchBar from './SearchBar';
import auth from "../store/auth";
import Logout from "./Logout";
import Cart from "./Cart";

export default function PortfolioNav() {
  const { auth, cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  let pages = [];
  auth.adminStatus === true
    ? (pages = ["Home", "E-commerce", "Stackathon", "Capstone", "Admin"])
    : (pages = ["Home", "E-commerce", "Stackathon", "Capstone"]);
  let settings = [];
  auth.id ? (settings = ["Account", "Cart", "Logout"]) : (settings = ["Account", "Cart", "Login"]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateTo = (page) => {
    navigate(`/portfolio/${page.toLowerCase()}`);
    handleCloseUserMenu()
    handleCloseNavMenu()
  };

  const getCartLength = () => {
    let sum = 0;
    cart.lineItems.forEach((product) => {
      sum += product.quantity;
    });
    return sum;
  };

  return (
    <AppBar position="static" style={{ background: "#004C60" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

<IconButton
  size="large"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleOpenNavMenu}
  color="inherit"
>
  <MenuIcon />
</IconButton>
<Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: 'block', md: 'none' },
  }}
>
  {pages.map((page) => (
    <MenuItem key={page} onClick={() => navigateTo(page)}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box>


        <LaptopChromebookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Home
          </Typography>

          <EmojiFoodBeverageIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/#/java/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-Commerce
          </Typography>

          <SportsKabaddiIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/stackathon/fighters"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Fighters
          </Typography>

          <FlightTakeoffIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/stackathon/trip"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Trip
          </Typography>

          <CardGiftcardIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/stackathon/present"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Presents
          </Typography>

          <ShowChartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/capstone/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            C-Trade
          </Typography>
          < SearchBar />
          

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 0,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            {!auth.id ? (
              <Link to="/capstone/login" style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            ) : (
              <Link to="/java/logout" style={{ color: "white", textDecoration: "none" }}>
                Logout
              </Link>
            )}
          </Typography>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 0,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            {!auth.id ? (
              <Link to="/capstone/login" style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            ) : (
              <Link to="/java/logout" style={{ color: "white", textDecoration: "none" }}>
                Logout
              </Link>
            )}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none'},
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.05rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {auth.id ? <div style={{color: 'white', textDecoration: 'none'  }}>{auth.username}</div> : ''}
          </Typography>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.05rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {auth.id ? <div style={{color: 'white', textDecoration: 'none'  }}>{auth.username}</div> : ''}
          </Typography>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 0,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".05rem",
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            {/* {!auth.id ? (<a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{color: 'white', textDecoration: 'none'  }}>Github Login</a>):''} */}
          </Typography>

          <IconButton size="large" color="inherit">
            <Badge badgeContent={getCartLength()} color="error">
              <Link to="/java/cart">
                <ShoppingCartSharp sx={{ pr: 1, color: "white" }} />
              </Link>
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar alt="Dwight Avatar" src="/static/images/avatarDS.jpeg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => navigateTo(`java/${setting}`)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


