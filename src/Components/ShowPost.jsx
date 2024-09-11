import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Loading } from './Loading';
import { ShowPostTernary } from './ShowPostTernary';
import { showPostCompareTheme } from './themes/showPostCompareTheme';
import { outerBox } from './StyledComponents/OuterBox';

export const ShowPost = (props) => {
    return (
        <ThemeProvider theme={showPostCompareTheme}>
            <Container fixed maxWidth='xl'>
                <CssBaseline />
                <Box sx={{ mt: 6, mb: 10, ...outerBox }}>
                    {!props.post.user
                        ? <Loading loading={props.loading} />
                        : <ShowPostTernary post={props.post} user={props.user} />}
                </Box>
            </Container>
        </ThemeProvider>
    );
}