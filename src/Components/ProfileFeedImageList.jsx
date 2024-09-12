import { ProfileFeedILNoPosts } from "./ProfileFeedILNoPosts";
import { ProfileFeedILPosts } from "./ProfileFeedILPosts";

export const ProfileFeedImageList = (props) => {
    return (
        <>
            {!props.posts[0] && props.loading
                ? <ProfileFeedILNoPosts />
                : <ProfileFeedILPosts posts={props.posts} />
            }
        </>
    );
}