import { PageHeader } from "../Components/PageHeader";
import { AboutUlfgCopy } from "../Components/AboutUlfgCopy";

export const AboutUlfgPage = (props) => {
    return (
        <>
            <PageHeader user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <AboutUlfgCopy />
        </>
    );
}