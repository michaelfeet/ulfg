import { Box, Container } from '@mui/material';
import { Loading } from './Loading';
import { ShowPostTernary } from './ShowPostTernary';
import { outerBox } from './StyledComponents/OuterBox';

export const ShowPostCard = (props) => {
    return (
        <Container fixed maxWidth='xl'>
            <Box sx={{ mt: 6, mb: 10, ...outerBox }}>
                {!props.post.user
                    ? <Loading loading={props.loading} />
                    : <ShowPostTernary post={props.post} user={props.user} loading={props.loading} setLoading={props.setLoading} />}
            </Box>
        </Container>
    )
}