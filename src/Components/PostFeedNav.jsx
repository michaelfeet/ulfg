import { Button, Box, ThemeProvider } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { postFeedNavTheme } from './themes/postFeedNavTheme';

export const PostFeedNav = (props) => {
    const handleNext = () => {
        props.setPostIndex(props.postIndex + 1);
        if (props.postIndex >= props.posts.length - 1) props.setPostIndex(0);
    }
    const handlePrevious = () => {
        props.setPostIndex(props.postIndex - 1);
        if (props.postIndex <= 0) props.setPostIndex(props.posts.length - 1);
    }
    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * props.posts.length);
        props.setPostIndex(randomNum);
    }
    return (
        <ThemeProvider theme={postFeedNavTheme}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                <Button onClick={handlePrevious}>
                    <KeyboardDoubleArrowLeftIcon />
                </Button>
                <Button onClick={handleRandom}>
                    <ShuffleIcon />
                </Button>
                <Button onClick={handleNext}>
                    <KeyboardDoubleArrowRightIcon />
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                <Button onClick={handlePrevious}>
                    Previous
                </Button>
                <Button onClick={handleRandom}>
                    Random
                </Button>
                <Button onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </ThemeProvider>
    );
}