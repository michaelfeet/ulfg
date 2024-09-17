import { CssBaseline, ThemeProvider } from '@mui/material';
import { showPostCompareTheme } from './themes/showPostCompareTheme';
import { ErrorMessage } from './ErrorMessage';
import { ShowPostCard } from './ShowPostCard';

export const ShowPost = (props) => {
    return (
        <ThemeProvider theme={showPostCompareTheme}>
            <CssBaseline />
            {!props.post
                ? <ErrorMessage error={'Post not found'} />
                : <ShowPostCard post={props.post} user={props.user} loading={props.loading} setLoading={props.setLoading} />}
        </ThemeProvider>
    );
}