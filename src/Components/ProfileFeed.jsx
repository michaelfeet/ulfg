import { Box, Container, CssBaseline } from "@mui/material";
import { Loading } from "./Loading";
import { ProfileFeedImageList } from "./ProfileFeedImageList";
import { outerBox } from "./StyledComponents/OuterBox";

export const ProfileFeed = (props) => {
    return (
        <Container fixed maxWidth='md' >
            <CssBaseline />
            <Box sx={{ mt: 6, ...outerBox }}>
                {props.loading
                    ? <Loading loading={props.loading} />
                    : <ProfileFeedImageList loading={props.loading} posts={props.posts} />
                }
            </Box>
        </Container>
    );
}