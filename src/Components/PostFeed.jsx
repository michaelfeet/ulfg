import { Container, CssBaseline, Box } from '@mui/material';
import { Loading } from './Loading';
import { PostCard } from './PostCard';
import { PostFeedNav } from './PostFeedNav';
import { outerBox } from './StyledComponents/OuterBox';

export const PostFeed = (props) => {
    return (
        <Container fixed maxWidth='md'>
            <CssBaseline />
            <Box sx={{ mt: 6, mb: 25, ...outerBox }}>
                <PostFeedNav setPostIndex={props.setPostIndex} postIndex={props.postIndex} posts={props.posts} />
                {!props.posts
                    ? <Loading loading={props.loading} />
                    : <PostCard posts={props.posts} postIndex={props.postIndex} loading={props.loading} />
                }
                <PostFeedNav setPostIndex={props.setPostIndex} postIndex={props.postIndex} posts={props.posts} />
            </Box>
        </Container>
    );
}