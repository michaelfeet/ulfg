import { Box, CircularProgress } from '@mui/material';

export const Loading = (props) => {
    return (
        <>
            {props.loading
                ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                : null}
        </>
    );
}