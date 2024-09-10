import { PageHeader } from "../Components/PageHeader";
import { PostFormDialog } from "../Components/PostFormDialog";

export const NewPost = (props) => {
    return (
        <>
            <PageHeader user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <PostFormDialog user={props.user} loading={props.loading} setLoading={props.setLoading} />
        </>
    );
}