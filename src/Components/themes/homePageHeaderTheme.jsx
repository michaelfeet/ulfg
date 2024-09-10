import { createTheme } from "@mui/material";

export const homePageHeaderTheme = createTheme({
    typography: {
        h5: {
            fontWeight: 700,
            fontSize: 20
        },
        h6: { 
            fontWeight: 300,
            fontSize: 17

        },
        fontFamily: [
            "Comic Neue",
            'cursive'
        ].join(','),
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#eeeeee'
                }
            }
        }
    }
});