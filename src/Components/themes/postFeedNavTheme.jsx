import { createTheme } from "@mui/material";

export const postFeedNavTheme = createTheme({
    palette: {
        primary: {
            main: '#50786E',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    '&:hover': { backgroundColor: '#5A6E6E' },
                    textTransform: 'none',
                    margin: 3,
                    width: 90,
                }
            }
        }
    }
});