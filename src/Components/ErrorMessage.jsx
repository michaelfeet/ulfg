import { Alert, Box, CssBaseline } from '@mui/material';
import { outerBox } from './StyledComponents/OuterBox';

export const ErrorMessage = (props) => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ ...outerBox, mt: 5 }}>
                {props.error
                    ? <Alert severity="error">{props.error}</Alert>
                    : null}
            </Box>
        </>
    );
}