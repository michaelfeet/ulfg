import { Navigate } from "react-router-dom";
import { SignInForm } from "../Components/SignInForm";

export const SignInPage = (props) => {
    return (
        <>
            {props.user
                ? <Navigate to='/' />
                : <SignInForm user={props.user} setUser={props.setUser} loading={props.loading} setLoading={props.setLoading} />
            }
        </>
    )
}