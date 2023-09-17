import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SearchBar from './SearchBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';


function NavBar() {
  const { auth, messages } = useSelector(state => state);
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [clickedDate, setClickedDate] = useState(10000000)
  const [timeInDay, setTimeInDay] = useState(1000) 

  // const pages = ['Home', 'Stocks', 'Graphs', 'Portfolio'];
  // I commented the above out so that the Stocks and Graphs page wouldn't show...these are a relic of the past post search bar creation
  const pages = ['Home', 'Portfolio'];
    let settings = []
    auth.id ? (settings = ['Account', 'Deposit', 'Chats', 'Logout']) : (settings = [ 'Login' ])

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
    navigate(`/capstone/${page.toLowerCase()}`)
    handleCloseUserMenu()
    handleCloseNavMenu()
  }

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
    <AppBar position="static" sx={{ bgcolor: "green" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShowChartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            C-Trade
          </Typography>

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
          <ShowChartIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            C-Trade
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigateTo(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <SearchBar />
          {/* <Box sx={{ flexGrow: 1}}> */}

          <IconButton size="large" aria-label="show new messages" color="inherit">
              <Badge  badgeContent={ messagesUnread() } color="error">
                {/* <MailIcon onClick={(ev) => navigateTo('chats')} /> */}
                <MailIcon onClick={() => getMessagesUnreadClick() } />
              </Badge>
            </IconButton>
          {/* <IconButton
              size="large"
              aria-label="show 7 new notifications"
              color="inherit"
            >
              <Badge badgeContent={ messagesUnread() } color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          {/* </Box> */}

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {auth.id ? <a style={{color: 'white', textDecoration: 'none'  }}>{auth.username}</a> : ''}
            
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

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={auth.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => navigateTo(setting)}>
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
export default NavBar;