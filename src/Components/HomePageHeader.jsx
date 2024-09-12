import { Typography, Box, Container, ThemeProvider } from "@mui/material"
import { homePageHeaderTheme } from "./themes/homePageHeaderTheme";

export const HomePageHeader = () => {
    return (
        <ThemeProvider theme={homePageHeaderTheme}>
            <Container maxWidth='md'>
                <Box sx={{ border: 1, borderTop: 0, m: 2, p: 3, borderColor: '#50786E', borderRadius: '40px' }}>
                    <Typography variant="h5">
                        A webcomic capturing the favorable and unfortunate.
                    </Typography>
                    <Typography variant='h6'>
                        This cheeky  site strives to document these moments to the best of our memory.
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}