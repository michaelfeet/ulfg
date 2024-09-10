import { createTheme } from "@mui/material";

export const dialogTheme = createTheme({
    palette: {
        primary: {
            main: '#50786E',
        },
        background: {
            default: '#323232',
        },
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        background: '#323232'
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    color: '#eeeeee',
                    textAlign: 'center'
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
                    "&.Mui-focused": { color: "#eeeee" },
                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: '#eeeeee'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        }
    }
});