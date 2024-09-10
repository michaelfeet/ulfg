import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../services/postService.js';
import { dialogTheme } from './themes/dialogTheme.jsx';

export const DeleteDialog = (props) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await postService.deletePost(props.post._id)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
        handleClose();
    }
    return (
        <ThemeProvider theme={dialogTheme}>
            <Container>
                <Button onClick={handleClickOpen} aria-label="delete">
                    <ClearIcon sx={{ color: '#eeeeee' }} />
                </Button>
                <Dialog onClose={handleClose} open={open} PaperProps={{ component: 'form' }}>
                    <DialogTitle>
                        Confirm Delete
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this post?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </ThemeProvider>
    );
}