import { Navigate } from "react-router-dom";
import { SignUpForm } from "../Components/SignUpForm";

export const SignUpPage = (props) => {
    return (
        <>
            {props.user
                ? <Navigate to='/' />
                : <SignUpForm user={props.user} setUser={props.setUser} loading={props.loading} setLoading={props.setLoading} />
            }
        </>
    )
}