import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, ThemeProvider } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../services/userService.js';
import { ErrorMessage } from './ErrorMessage.jsx';
import { VisuallyHiddenInput } from './StyledComponents/VisuallyHiddenInputButton.jsx';
import { Loading } from './Loading.jsx';
import { signUpSignInTheme } from './themes/signUpSignInTheme.jsx';
import { outerBox } from './StyledComponents/OuterBox.jsx';

export const SignUpForm = (props) => {
    const navigate = useNavigate();
    const [formState, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
    });
    const [photoState, setPhotoState] = useState('');
    const [error, setError] = useState({
        message: '',
        passwordError: false
    });
    const handleChange = (e) => {
        setForm({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const handleFileInput = (e) => {
        setPhotoState(e.target.files[0]);
        setError({
            message: '',
            passwordError: false
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setLoading(true);
        setError({
            message: '',
            passwordError: false
        });
        const form = new FormData();
        for (let formFieldName in formState) {
            form.append(formFieldName, formState[formFieldName]);
        }
        form.append('photo', photoState);
        try {
            const user = await userService.signup(form);
            props.setUser(user);
            props.setLoading(false);
            navigate('/');
        } catch (err) {
            console.log(err)
            setError({
                message: err,
                passwordError: false
            });
            props.setLoading(false);
        }
    }
    return (
        <ThemeProvider theme={signUpSignInTheme}>
            <Container fixed maxWidth={'xs'}>
                <CssBaseline />
                <Box sx={{ mt: 16, mb: 25, ...outerBox }}>
                    <Typography variant='h4'>
                        Sign Up
                    </Typography>
                    <Box onSubmit={handleSubmit} component="form" noValidate autoComplete='off'>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onChange={handleChange} id="username" name="username" label="Username" autoComplete="username" autoFocus required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleChange} id="email" name="email" label="Email" autoComplete="email" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleChange} id="password" name="password" label="Password" type="password" autoComplete="new-password" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleChange} id="passwordConf" name="passwordConf" label="Confirm Password" type="password" autoComplete="new-password" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <Button className='upload-btn' component="label" role={undefined} variant="text" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                                    Upload Photo
                                    <VisuallyHiddenInput onChange={handleFileInput} type="file" required />
                                </Button>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained">
                            Sign Up
                        </Button>
                        <ErrorMessage error={error.message} />
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Log in
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