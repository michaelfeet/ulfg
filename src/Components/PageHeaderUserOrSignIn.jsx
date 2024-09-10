import { PageHeaderUserLoggedIn } from './PageHeaderUserLoggedIn';
import { PageHeaderUserLoggedOut } from './PageHeaderUserLoggedOut';

export const PageHeaderUserOrSignIn = (props) => {
    return (
        <>
            {props.user
                ? <PageHeaderUserLoggedIn user={props.user} handleLogOut={props.handleLogOut} />
                : <PageHeaderUserLoggedOut />
            }
        </>
    );
}