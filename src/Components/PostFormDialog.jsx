import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Container, CssBaseline, ThemeProvider } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as postService from '../services/postService.js';
import { VisuallyHiddenInput } from './StyledComponents/VisuallyHiddenInputButton.jsx';
import { ErrorMessage } from './ErrorMessage';
import { dialogTheme } from './themes/dialogTheme.jsx';

export const PostFormDialog = (props) => {
    const [open, setOpen] = useState(true);
    const [photo, setPhoto] = useState({});
    const [title, setTitle] = useState('');
    const [error, setError] = useState({
        message: ''
    });
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };
    const handleChange = (e) => {
        setTitle(
            e.target.value
        );
        setError({ message: '' });
    }
    const handleFileInput = (e) => {
        setPhoto(e.target.files[0]);
        setError({ message: '' });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('photo', photo);
        try {
            await postService.addPost(formData);
            props.setLoading(false);
            if (!error.message) {
                setTitle('');
                props.setLoading(false);
                handleClose();
            }
        } catch (err) {
            setError({ message: err });
        }
        props.setLoading(false);
    }
    return (
        <ThemeProvider theme={dialogTheme}>
            <Container>
                <Box>
                    <CssBaseline />
                    <Dialog onClose={handleClose} open={open} PaperProps={{ component: 'form' }}>
                        <DialogTitle>
                            New Post
                        </DialogTitle>
                        <DialogContent>
                            <TextField onChange={handleChange} id="title" name="title" label="Title" autoFocus fullWidth required variant="standard" margin="dense" />
                            <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                                Select File
                                <VisuallyHiddenInput onChange={handleFileInput} type="file" name='photo' required />
                            </Button>
                            <ErrorMessage error={error.message} />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                            <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Container>
        </ThemeProvider>
    );
}