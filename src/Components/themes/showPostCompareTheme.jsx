import { createTheme } from "@mui/material";

export const showPostCompareTheme = createTheme({
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
                align: 'center'
            },
            styleOverrides: {
                root: {
                    color: '#eeeeee',
                    alignContent: 'center'
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            }, 
            styleOverrides: {
                root: {
                    background: '#323232',
                    marginTop: 25
                }
            }
        },
        MuiLink: {
            defaultProps: {
                color: '#fdfdfd',
                underline: 'none',
                px: 2,
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        color: '#fdfdfd',
                        backgroundColor: '#5A6E6E',
                    }
                }
            }
        },
        MuiImageListItem: {
            styleOverrides: {
                root: {
                    paddingTop: 60
                }
            }
        },
        MuiImageListItemBar: {
            defaultProps: {
                position: 'top'
            }
        }
    }
});