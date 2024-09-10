import { Alert } from '@mui/material';

export const ErrorMessage = (props) => {
    return (
        props.error
            ? <Alert severity="error">{props.error}</Alert>
            : null
    );
}