import { ShowPostUserVerified } from './ShowPostUserVerified';
import { ShowPostUserUnverified } from './ShowPostUserUnverified';

export const ShowPostTernary = (props) => {
    const postDate = new Date(props.post.time).toLocaleDateString("en-US");
    if (props.user && props.post.user?.username === props.user.username) {
        return (
            <ShowPostUserVerified post={props.post} user={props.user} postDate={postDate} />
        );
    } else {
        return (
            <ShowPostUserUnverified post={props.post} user={props.user} postDate={postDate} />
        );
    }
}