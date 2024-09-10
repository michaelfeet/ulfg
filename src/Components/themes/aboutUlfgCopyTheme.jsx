import { createTheme } from "@mui/material";

export const AboutUlfgCopyTheme = createTheme({
    palette: {
        primary: {
            main: '#50786E',
        },
        background: {
            default: '#323232',
        },
    },
    typography: {
        h3: {
            textAlign: 'center',
            fontWeight: 500,
            marginTop: 35,
            marginBottom: 25
        },
        h4: {
            textAlign: 'left',
            fontWeight: 300,
            marginBottom: 20
        },
        h6: {
            textAlign: 'left',
            fontWeight: 300,
            marginBottom: 25
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#eeeeee'
                }
            }
        },
        MuiAppBar: {
            position: 'static'
        },
        MuiToolBar: {
            disableGutters: true
        },
    }
});