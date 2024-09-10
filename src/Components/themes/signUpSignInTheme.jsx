import { createTheme , styled, Box} from "@mui/material";

export const signUpSignInTheme = createTheme({
    palette: {
        primary: {
            main: '#50786E',
        },
        background: {
            default: '#323232',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                mb: 5
            },
            styleOverrides: {
                root: {
                    color: '#eeeeee',
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#688f85'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    input: {
                        color: '#eeeeee'
                    },
                    label: {
                        color: '#eeeeee'
                    },
                    '& label.Mui-focused': {
                        color: '#eeeeee',
                    },
                    fieldSet: {
                        borderColor: '#50786E'
                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#eeeeee',
                    textTransform: 'none',
                    marginBottom: 15,
                    marginTop: 15,
                    '&:hover': { backgroundColor: '#5A6E6E' }
                }
            }
        }
    },
});