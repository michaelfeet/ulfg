import { Box, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem, Toolbar } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageHeaderUserLoggedIn = (props) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = ['Profile', 'New Post', 'Logout'];
    const settingsObj = {
        'Profile': () => navigate(`/user/${props.user.username}`),
        'New Post': () => navigate('/newpost'),
        'Logout': () => props.handleLogOut()
    }
    const navigate = useNavigate();
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    return (
        <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={settingsObj['New Post']} disableElevation sx={{ my: 2, color: '#eeeeee', display: 'block' }}>
                    {settings[1]}
                </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={props.user.username} src={props.user.photoUrl} />
                    </IconButton>
                </Tooltip>
                <Menu onClose={handleCloseUserMenu} open={Boolean(anchorElUser)} id="menu-appbar" anchorEl={anchorElUser} keepMounted anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ mt: '45px' }}>
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center" onClick={settingsObj[setting]}>{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Toolbar>
    );
}