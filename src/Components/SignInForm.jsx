import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../services/userService';
import { ErrorMessage } from './ErrorMessage';
import { Loading } from './Loading';
import { signUpSignInTheme } from './themes/signUpSignInTheme.jsx';
import { outerBox } from './StyledComponents/OuterBox.jsx';

export const SignInForm = (props) => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({
        message: '',
        passwordError: false
    });
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setLoading(true);
        try {
            const user = await userService.signin(formState);
            props.setUser(user);
            props.setLoading(false);
            navigate('/');
        } catch (err) {
            setError({
                message: err
            });
            props.setLoading(false);
        }
    }
    return (
        <ThemeProvider theme={signUpSignInTheme}>
            <Container fixed maxWidth='xs'>
                <CssBaseline />
                <Box sx={{ mt: 16, mb: 20, ...outerBox }}>
                    <Typography variant='h4'>
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="username" name="username" label="Username" autoComplete="username" onChange={handleChange} required autoFocus fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="password" name="password" label="Password" type="password" autoComplete="current-password" onChange={handleChange} required fullWidth />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained">
                            Sign In
                        </Button>
                        <ErrorMessage error={error.message} />
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Loading loading={props.loading} setLoading={props.setLoading} />
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}