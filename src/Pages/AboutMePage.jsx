import { AboutMeCopy } from "../Components/AboutMeCopy";
import { PageHeader } from "../Components/PageHeader";

export const AboutMePage = (props) => {
    return (
        <>
            <PageHeader user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <AboutMeCopy />
        </>
    );
}