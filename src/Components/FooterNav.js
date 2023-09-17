
// import { useSelector } from 'react-redux';
// import { useNavigate, Link, useParams } from 'react-router-dom';


// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { ShoppingCartSharp } from '@mui/icons-material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SearchBar from './SearchBar';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));



// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function FooterNav() {
//   const { auth, cart, messages } = useSelector(state => state);
//   const navigate = useNavigate()
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const { filterString } = useParams()
//   const filter = filterString ? JSON.parse(filterString) : {}
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

  

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const getCartLength = () => {
//     let sum = 0;
//     cart.lineItems.forEach(product => {
//       sum += product.quantity
//     })
//     return sum
//   }

//   const search = (ev) => {
//     ev.preventDefault()
//     const _filter = {...filter}
//     if(ev.target.name === "name"){
//       if(ev.target.value){
//         _filter.name = ev.target.value
//       } else {
//         delete _filter.name
//       }
//     }
//     navigate(`/java/drinks/search/${JSON.stringify(_filter)}`)
//   }


//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   const messagesUnread = (ev) => {
//     console.log(ev)
//     //let unread =  messages.filter(message => message.toId === auth.id)
//     let unread =  messages.filter(message => message.toId === auth.id && message.createdAt.split('T')[0].split('-')[0] * 1000 + Number(message.createdAt.split('T')[0].split('-')[1]) * 31 + Number(message.createdAt.split('T')[0].split('-')[2]) > clickedDate && timeInDay < Number(message.createdAt.split('T')[1].split('.')[0].split(':')[0] + message.createdAt.split('T')[1].split('.')[0].split(':')[1]))
//     return unread.length
//   }

//   const getMessagesUnreadClick = () => {
//     const now = new Date();
//     var formattedDate = now.getFullYear() +'-0'+(now.getMonth()+1)+'-'+now.getDate()
//     let time = now.getHours() * 100 + now.getMinutes()
//     let currDateNum = Number(now.getFullYear() * 1000 + (now.getMonth()+1) * 31 + now.getDate())
//     console.log(currDateNum)
//     console.log(formattedDate)
//     console.log(time)
//     // let messageDateNum = messages[0].createdAt.split('T')[0].split('-')[0] * 1000 + Number(messages[0].createdAt.split('T')[0].split('-')[1]) * 31 + Number(messages[0].createdAt.split('T')[0].split('-')[2])
//     // let messageTime = Number(messages[0].createdAt.split('T')[1].split('.')[0].split(':')[0] + messages[0].createdAt.split('T')[1].split('.')[0].split(':')[1])
//     // console.log(messages[0].createdAt.split('T')[0].split('-')[0] * 1000 + Number(messages[0].createdAt.split('T')[0].split('-')[1]) * 31 + Number(messages[0].createdAt.split('T')[0].split('-')[2]))
//     // console.log(messages[0].createdAt.split('T')[0])
//     // console.log(Number(messages[0].createdAt.split('T')[1].split('.')[0].split(':')[0] + messages[0].createdAt.split('T')[1].split('.')[0].split(':')[1]))
//     // let unread =  messages.filter(message => message.toId === auth.id)
//     // return unread.length
//     //console.log(currDateNum >= messageDateNum, messageTime > time)
//     setClickedDate(currDateNum)
//     setTimeInDay(time)

//     let unread =  messages.filter(message => message.toId === auth.id && message.createdAt.split('T')[0].split('-')[0] * 1000 + Number(message.createdAt.split('T')[0].split('-')[1]) * 31 + Number(message.createdAt.split('T')[0].split('-')[2]) > currDateNum)
//     console.log(unread)
//     console.log(unread.length)
//     navigate('/capstone/chats')
//   }

//   return (
//     <Box sx={{ flexGrow: 10, maxHeight: 1000 }}>
//       <AppBar position="static" style={{ background: '#004C60', display: 'flex'}}>
//         <Toolbar>
       
//           <div style={{ display: 'flex', textDecoration: 'none', flexDirection: 'column', alignItems:"flex-start", marginRight: 100}}>
//           <Typography
//             variant="subtitle2"
//             component="a"
//             href="/#/java/home"
//             sx={{ textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Home
//           </Typography>
//           <Typography
//             variant="subtitle2"
//             href="/#/java/login"
            
//             component="a"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Login
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             href="/#/java/merch"
//             component="a"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             {!auth.id ? (<a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{color: 'white', textDecoration: 'none'  }}>Github Login</a>):(<Link to="/java/logout"  style={{color: 'white', textDecoration: 'none'  }}>Github Logout</Link>)}
//           </Typography>
//           <Typography
//             variant="subtitle2"
//             component="a"
//             href="/#/java/about"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             About
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/account"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Account
//           </Typography>
//           </div>
//           <div style={{ display: 'flex', textDecoration: 'none', flexDirection: 'column' }}>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/about/contact"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Contact
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/about/careers"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Careers
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/about/locations"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Locations
//           </Typography>
//           </div>
//           <div style={{ display: "flex", textDecoration: 'none', flexDirection: "column", marginLeft: 100,  }}>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/menu"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Drinks
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/java/merch"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Merch
//           </Typography>
          
//           </div>

//           <div style={{ display: "flex", textDecoration: 'none', flexDirection: "column", marginLeft: 100,  }}>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/capstone/home"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Capstone Home
//           </Typography>
//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/capstone/accountSetup"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Account
//           </Typography>

//           <Typography
//             variant="subtitle2"
            
//             component="a"
//             href="/#/capstone/chats"
//             sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
//           >
//             Chats
//           </Typography>
          
//           </div>

//           < SearchBar />
//           <Box sx={{ flexGrow: 1 }} />

//           <IconButton size="large" aria-label="show new messages" color="inherit">
//               <Badge  badgeContent={ messagesUnread() } color="error">
//                 {/* <MailIcon onClick={(ev) => navigateTo('/capstone/chats')} /> */}
//                 <MailIcon onClick={() => getMessagesUnreadClick() } />
//               </Badge>
//             </IconButton>
          
//           <IconButton
//               size="large"
//               color="inherit"
//             >
//               <Badge badgeContent={getCartLength()} color="error">
//                 <Link to="/java/cart" ><ShoppingCartSharp sx={{ pr: 1, color: 'white'}}/></Link>
//               </Badge>
//             </IconButton>
//         </Toolbar>

//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }


import { useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';

// import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ShoppingCartSharp } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchBar from './SearchBar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function FooterNav() {
  const { auth, cart, messages } = useSelector(state => state);
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { filterString } = useParams()
  const filter = filterString ? JSON.parse(filterString) : {}
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [clickedDate, setClickedDate] = useState(10000000)
  const [timeInDay, setTimeInDay] = useState(1000) 
 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const getCartLength = () => {
    let sum = 0;
    cart.lineItems.forEach(product => {
      sum += product.quantity
    })
    return sum
  }

  const search = (ev) => {
    ev.preventDefault()
    const _filter = {...filter}
    if(ev.target.name === "name"){
      if(ev.target.value){
        _filter.name = ev.target.value
      } else {
        delete _filter.name
      }
    }
    navigate(`/java/drinks/search/${JSON.stringify(_filter)}`)
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const messagesUnread = (ev) => {
    console.log(ev)
    //let unread =  messages.filter(message => message.toId === auth.id)
    let unread =  messages.filter(message => message.toId === auth.id && message.createdAt.split('T')[0].split('-')[0] * 1000 + Number(message.createdAt.split('T')[0].split('-')[1]) * 31 + Number(message.createdAt.split('T')[0].split('-')[2]) > clickedDate && timeInDay < Number(message.createdAt.split('T')[1].split('.')[0].split(':')[0] + message.createdAt.split('T')[1].split('.')[0].split(':')[1]))
    return unread.length
  }

  const getMessagesUnreadClick = () => {
    const now = new Date();
    var formattedDate = now.getFullYear() +'-0'+(now.getMonth()+1)+'-'+now.getDate()
    let time = now.getHours() * 100 + now.getMinutes()
    let currDateNum = Number(now.getFullYear() * 1000 + (now.getMonth()+1) * 31 + now.getDate())
    console.log(currDateNum)
    console.log(formattedDate)
    console.log(time)
    // let messageDateNum = messages[0].createdAt.split('T')[0].split('-')[0] * 1000 + Number(messages[0].createdAt.split('T')[0].split('-')[1]) * 31 + Number(messages[0].createdAt.split('T')[0].split('-')[2])
    // let messageTime = Number(messages[0].createdAt.split('T')[1].split('.')[0].split(':')[0] + messages[0].createdAt.split('T')[1].split('.')[0].split(':')[1])
    // console.log(messages[0].createdAt.split('T')[0].split('-')[0] * 1000 + Number(messages[0].createdAt.split('T')[0].split('-')[1]) * 31 + Number(messages[0].createdAt.split('T')[0].split('-')[2]))
    // console.log(messages[0].createdAt.split('T')[0])
    // console.log(Number(messages[0].createdAt.split('T')[1].split('.')[0].split(':')[0] + messages[0].createdAt.split('T')[1].split('.')[0].split(':')[1]))
    // let unread =  messages.filter(message => message.toId === auth.id)
    // return unread.length
    //console.log(currDateNum >= messageDateNum, messageTime > time)
    setClickedDate(currDateNum)
    setTimeInDay(time)

    let unread =  messages.filter(message => message.toId === auth.id && message.createdAt.split('T')[0].split('-')[0] * 1000 + Number(message.createdAt.split('T')[0].split('-')[1]) * 31 + Number(message.createdAt.split('T')[0].split('-')[2]) > currDateNum)
    console.log(unread)
    console.log(unread.length)
    navigate('/capstone/chats')
  }

  return (
    <Box sx={{ flexGrow: 10, maxHeight: 1000 }}>
      <AppBar position="static" style={{ background: '#004C60', display: 'flex'}}>
        <Toolbar>
       
          <div style={{ display: 'flex', textDecoration: 'none', flexDirection: 'column', alignItems:"flex-start", marginRight: 100}}>
          <Typography
            variant="subtitle2"
            component="a"
            href="/#/java/home"
            sx={{ textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Home
          </Typography>
          <Typography
            variant="subtitle2"
            href="/#/capstone/login"
            
            component="a"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Login
          </Typography>
          {/* <Typography
            variant="subtitle2"
            
            href="/#/java/merch"
            component="a"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            {!auth.id ? (<a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{color: 'white', textDecoration: 'none'  }}>Github Login</a>):(<Link to="/java/logout"  style={{color: 'white', textDecoration: 'none'  }}>Github Logout</Link>)}
          </Typography> */}
          <Typography
            variant="subtitle2"
            component="a"
            href="/#/java/about"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            About
          </Typography>
          {/* <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/account"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Account
          </Typography> */}
          </div>
          <div style={{ display: 'flex', textDecoration: 'none', flexDirection: 'column' }}>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/about/contact"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Contact
          </Typography>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/about/careers"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Careers
          </Typography>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/about/locations"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Locations
          </Typography>
          </div>
          <div style={{ display: "flex", textDecoration: 'none', flexDirection: "column", marginLeft: 100,  }}>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/menu"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Drinks
          </Typography>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/java/merch"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Merch
          </Typography>
          
          </div>

          <div style={{ display: "flex", textDecoration: 'none', flexDirection: "column", marginLeft: 100,  }}>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/capstone/home"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Capstone Home
          </Typography>
          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/capstone/accountSetup"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Account
          </Typography>

          <Typography
            variant="subtitle2"
            
            component="a"
            href="/#/capstone/chats"
            sx={{ display: { xs: 'none', sm: 'flex' }, textDecoration: 'none', marginRight: .5, color: "white" }}
          >
            Chats
          </Typography>
          
          </div>

          < SearchBar />
          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" aria-label="show new messages" color="inherit">
              <Badge  badgeContent={ messagesUnread() } color="error">
                {/* <MailIcon onClick={(ev) => navigateTo('/capstone/chats')} /> */}
                <MailIcon onClick={() => getMessagesUnreadClick() } />
              </Badge>
            </IconButton>
          
          <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={getCartLength()} color="error">
                <Link to="/java/cart" ><ShoppingCartSharp sx={{ pr: 1, color: 'white'}}/></Link>
              </Badge>
            </IconButton>
        </Toolbar>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}