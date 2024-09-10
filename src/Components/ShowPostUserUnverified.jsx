import { Typography, ImageListItem, ImageListItemBar, Link, } from '@mui/material';

export const ShowPostUserUnverified = (props) => {
    return (
        <>
            <Typography>
                <Link href={`/user/${props.post.user.username}`}>
                    more from {props.post.user.username}
                </Link>
            </Typography>
            <ImageListItem>
                <img src={props.post.photoUrl} />
                <ImageListItemBar title={props.post.title} subtitle={<span>by: {props.post.user.username}</span>} />
            </ImageListItem>
        </>
    );
}