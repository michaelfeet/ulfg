import { Box, Typography } from "@mui/material";
import { outerBox } from "./StyledComponents/OuterBox";

export const ProfileFeedILNoPosts = (props) => {
    return (
        <Box sx={{ ...outerBox }}>
            <Typography variant="h3" sx={{ color: '#eeeeee' }}>
                User has no posts
            </Typography>
        </Box>
    );
}