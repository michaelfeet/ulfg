import { Box, Container, ThemeProvider, Link, Typography, CssBaseline, List, ListItem } from "@mui/material"
import { AboutUlfgCopyTheme } from "./themes/aboutUlfgCopyTheme"

export const AboutUlfgCopy = () => {
    return (
        <ThemeProvider theme={AboutUlfgCopyTheme}>
            <Container fixed maxWidth='md'>
                <CssBaseline />
                <Box sx={{ pb: 10 }}>
                    <Typography variant="h3">
                        The Unfortunate Life of a Forgotten Genius You’ve Never Heard Of
                    </Typography>
                    <Typography variant="h6">
                        Welcome to ULFG, where the ups and downs of life come to life through unique, engaging comics. Here, you'll find a collection of illustrated episodes that capture the often unpredictable and sometimes whimsical nature of those experiences that might have you asking yourself, Did that just happen? From the humorous and light-hearted to the more challenging and reflective, our comics offer a window into the diverse range of human experiences.
                    </Typography>
                    <Typography variant="h6" >
                        Our mission is to build a community where you can capture and share the diverse range of life's ups and downs through creative storytelling. If you have personal experiences—whether they’re funny, challenging, or somewhere in between—that you’d like to share, we invite you to contribute your own comic episodes. Whether you're here for a quick laugh, a reflective moment, or to share your own story, we hope our content brings a touch of brightness to your day. Join us, add your voice to the narrative, and become a part of our vibrant community!
                    </Typography>
                    <Typography variant="h4">
                        Technical Showcase
                    </Typography>
                    <Typography variant="h6">
                        This website is more than just a platform for comics — it's a testament to modern web development practices showcasing the following:
                        <List>
                            <ListItem>
                                React: For creating dynamic and responsive user interfaces.
                            </ListItem>
                            <ListItem>
                                Express & Node.js: To handle server-side operations and API requests efficiently.
                            </ListItem>
                            <ListItem>
                                MongoDB: For robust object storage and seamless data management.
                            </ListItem>
                            <ListItem>
                                Amazon S3: Ensuring reliable and scalable storage for our comic assets.
                            </ListItem>
                            <ListItem>
                                JSON Web Token: Providing secure and efficient authorization.
                            </ListItem>
                            <ListItem>
                                Material UI: Enhancing the visual appeal with sleek, modern React components.
                            </ListItem>
                        </List>
                        This project not only serves as a creative outlet but also as a showcase of my skills in web development. It’s designed to demonstrate my ability to build and manage a comprehensive web application, integrating various technologies to deliver a seamless and engaging user experience. Find out more about me
                        <Link href='/aboutme' underline="none">
                            <span>&nbsp;here.</span>
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
}