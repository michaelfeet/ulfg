import { Box, IconButton, Typography, Menu, Button, MenuItem, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageHeaderStatic = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const pages = ['Home', 'About ULFG', 'About Me'];
    const pagesObj = {
        'Home': () => navigate('/'),
        'About ULFG': () => navigate('/aboutulfg'),
        'About Me': () => navigate('/aboutme')
    }
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    return (
        <>
            <Typography onClick={navigateHome} variant="h6" component="a" href='' noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                ULFG
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton onClick={handleOpenNavMenu} size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                    <MenuIcon />
                </IconButton>
                <Menu onClose={handleCloseNavMenu} open={Boolean(anchorElNav)} id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} sx={{ display: { xs: 'block', md: 'none' }, }}>
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" onClick={pagesObj[page]}>{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Typography onClick={navigateHome} variant="h5" noWrap component="a" href='' sx={{ ml: 5, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                ULFG
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button onClick={pagesObj[page]} key={page} sx={{ my: 2, color: '#eeeeee', display: 'block' }}>
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    );
}