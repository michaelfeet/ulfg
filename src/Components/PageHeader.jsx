import { AppBar, Toolbar, Container } from '@mui/material';
import { PageHeaderUserOrSignIn } from './PageHeaderUserOrSignIn';
import { PageHeaderStatic } from './PageHeaderStatic';

export const PageHeader = (props) => {
    return (
        <AppBar>
            <Container >
                <Toolbar>
                    <PageHeaderStatic />
                    <PageHeaderUserOrSignIn user={props.user} handleLogOut={props.handleLogOut} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}