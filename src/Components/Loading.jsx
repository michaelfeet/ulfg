import { Box, CircularProgress, CssBaseline } from '@mui/material';

export const Loading = (props) => {
    return (
        <>
            <CssBaseline />
            {props.loading
                ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                : null}
        </>
    );
}