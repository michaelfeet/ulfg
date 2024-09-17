import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

export const ProfileFeedImageList = (props) => {
    return (
        <ImageList cols={1}>
            {props.posts.map((post) => (
                <Link to={`/post/${post._id}`} key={post.photoUrl}>
                    <ImageListItem sx={{ pt: 7.5, mb: 5 }}>
                        <img srcSet={`${post.photoUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${post.photoUrl}?w=164&h=164&fit=crop&auto=format`} alt={post.title} loading="lazy" />
                        <ImageListItemBar title={post.title} subtitle={<span>by: {post.user.username}</span>} position="top" />
                    </ImageListItem>
                </Link>
            ))}
        </ImageList>
    );
}