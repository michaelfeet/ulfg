import { Box, Container, CssBaseline, Link, ThemeProvider, Typography } from "@mui/material"
import { AboutMeCopyTheme } from "./themes/aboutMeCopyTheme"

export const AboutMeCopy = () => {
    return (
        <ThemeProvider theme={AboutMeCopyTheme}>
            <Container fixed maxWidth='md'>
                <CssBaseline />
                <Box>
                    <Box sx={{ pt: 5, pb: 2 }}>
                        <Typography variant="h4">
                            Michael Feet
                        </Typography>
                        <Typography variant="h5">
                            Contact:
                        </Typography>
                        <Typography variant="body1">
                            <Link href="https://www.linkedin.com/in/michaelfeet/" underline="none" target="_blank" rel="noopener">
                                LinkedIn
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="https://github.com/michaelfeet" underline="none" target="_blank" rel="noopener">
                                GitHub
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="mailto:michael.a.feet@gmail.com" underline="none" target="_blank" rel="noopener">
                                michael.a.feet@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{pb:5}}>
                        <Typography variant="h4">
                            Innovative Software Developer | Former Healthcare Revenue Management Expert
                        </Typography>
                        <Typography variant="h6">
                            With over five years of experience in healthcare revenue management, I bring a strong background in analytical thinking, problem-solving, and process optimization to my new career in software development. Recently, I completed an intensive software development program at General Assembly, where I honed my skills in Javascript, Python, React, Django, Express.js, Node.js, Postgres, MongoDB.
                        </Typography>
                        <Typography variant="h6">
                            My journey from managing complex revenue streams in healthcare to crafting innovative digital solutions has equipped me with a unique perspective on both technical and business challenges. I’m passionate about creating efficient, user-centric software solutions that drive results and enhance user experiences.
                        </Typography>
                        <Typography variant="h6">
                            Currently, I am excited to leverage my analytical expertise and newly acquired development skills in a dynamic web or software development role. I’m eager to contribute to a forward-thinking team where I can continue to grow, tackle new challenges, and make a meaningful impact.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}