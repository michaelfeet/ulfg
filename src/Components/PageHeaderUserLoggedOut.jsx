import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PageHeaderUserLoggedOut = (props) => {
    const navigate = useNavigate();
    const signUpButton = () => navigate('/signup');
    return (
        <Box>
            <Button onClick={signUpButton}>
                Sign Up
            </Button>
        </Box>
    );
}