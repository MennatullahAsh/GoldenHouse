import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import logoImage from '../Utilis/images/logo.png';
import style from './style.css'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar position="static" className='AppBar'>
            <Container maxWidth="xl" className='backBar'>
                <Toolbar disableGutters>
                    <img src={logoImage} alt="Logo" style={{ marginRight: '16px' , width:'60px', height:'60px'}} />

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
                           
                        </Menu>
                    </Box>
                    <img
                        src={logoImage}
                        alt="Logo"
                        style={{ display: 'none', marginRight: '16px' }}
                    />
                   
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Button className='btnBar' > <Link to='/' style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }}> الرئيسية</Link></Button>
                        <Button className='btnBar' > <Link to='/' style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }}> من نحن</Link></Button>
                        <Button className='btnBar' > <Link to='/' style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }}>  دوراتنا</Link></Button>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            // onClick={() => navigate('/')}
                            >
                            <Link to='/'
                                style={{
                                    color: 'black',
                                    backgroundColor: '#001D58',
                                    marginRight: '20px',
                                    width: '90px',
                                    fontWeight: 'bold',
                                    borderRadius: '3px',
                                    textDecoration: 'none',
                                    color: '#fff',
                                    padding: '4px 5px'
                                }}>سجل الآن</Link>
                        </Button>
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
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
export default ResponsiveAppBar;
