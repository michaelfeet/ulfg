import { Box, Container, CssBaseline, Link, ThemeProvider, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
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
                            <Link href="https://www.linkedin.com/in/michaelfeet/" underline="hover" target="_blank" rel="noopener">
                                <LinkedInIcon /> LinkedIn
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="https://github.com/michaelfeet" underline="hover" target="_blank" rel="noopener">
                                <GitHubIcon /> GitHub
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="mailto:michael.a.feet@gmail.com" underline="hover" target="_blank" rel="noopener">
                                <EmailIcon /> michael.a.feet@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4">
                            Innovative Software Developer | Former Healthcare Revenue Management Expert
                        </Typography>
                        <Typography variant="h6">
                            My career began in healthcare revenue management where I utilized and cultivated my skills in analytic thinking, problem solving and process optimization to deliver support to customers, streamline training protocols and contribute to the team’s success. Eager to align my professional path with my evolving interests and goals, allowing me to leverage my skills in a new and impactful way, I took the leap to complete an intensive software development program at General Assembly. There, I discovered my existing qualities served me well in studying and acquiring the knowledge required to build this MERN stack application.
                        </Typography>
                        <Typography variant="h6">
                            My journey from managing complex revenue streams in healthcare to crafting innovative digital solutions has equipped me with a unique perspective on both technical and business challenges. I’m passionate about creating efficient, user-centric software solutions that drive results and enhance user experiences.
                        </Typography>
                        <Typography variant="h6">
                            Currently, I am excited to leverage my analytical expertise and newly acquired development skills in a dynamic software development role. I’m eager to contribute to a forward-thinking team where I can continue to further develop my abilities, tackle new challenges, and deliver significant results.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}