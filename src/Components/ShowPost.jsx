import { Loading } from './Loading';
import { ShowPostTernary } from './ShowPostTernary';
import { showPostCompareTheme } from './themes/showPostCompareTheme';
import { outerBox } from './StyledComponents/OuterBox';

export const ShowPost = (props) => {
    return (
        <ThemeProvider theme={showPostCompareTheme}>
            <CssBaseline />
            {!props.post
                    ? <Typography variant='h3' sx={{ pt: 7 }}>
                        Post Not Found
                    </Typography>
                    : <Container fixed maxWidth='xl'>
                        <Box sx={{ mt: 6, mb: 10, ...outerBox }}>
                            {!props.post.user
                                ? <Loading loading={props.loading} />
                                : <ShowPostTernary post={props.post} user={props.user} />
                            }
                        </Box>
                    </Container>
            }
        </ThemeProvider>
    );
}