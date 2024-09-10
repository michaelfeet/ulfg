
import { Card, ImageListItem, ImageListItemBar, Typography, Link, CardActions, CardContent } from '@mui/material';
import { DeleteDialog } from './DeleteDialog';

export const ShowPostUserVerified = (props) => {
    return (
        <>
            <Typography>
                <Link href={`/user/${props.post.user.username}`}>
                    More from {props.post.user.username}
                </Link>
            </Typography>
            <ImageListItem>
                <img src={props.post.photoUrl} />
                <ImageListItemBar title={props.post.title} subtitle={<span>by: {props.post.user.username}</span>} />
            </ImageListItem>
            <Card>
                <CardContent>
                    <Typography>
                        Delete Post
                    </Typography>
                    <CardActions>
                        <DeleteDialog post={props.post} />
                    </CardActions>
                </CardContent>
            </Card>
        </>
    );
}