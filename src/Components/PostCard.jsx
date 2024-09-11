import { ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';

export const PostCard = (props) => {
    return (
        <ImageListItem component={Link} to={`/post/${props.posts[props.postIndex]._id}`} sx={{ pt: 7.5 }}>
            <ImageListItemBar title={props.posts[props.postIndex].title} subtitle={<span>by: {props.posts[props.postIndex].user.username}</span>} position="top" sx={{ "& .MuiImageListItemBar-title": { color: '#eeeeee' }, "& .MuiImageListItemBar-subtitle": { color: '#eeeeee' } }} />
            {/* <img srcSet={`${props.posts[props.postIndex].photoUrl}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${props.posts[props.postIndex].photoUrl}?w=248&fit=crop&auto=format`} alt={props.posts[props.postIndex].title} loading="lazy" /> */}
            <img srcSet={`${props.posts[props.postIndex].photoUrl}`} src={`${props.posts[props.postIndex].photoUrl}`} alt={props.posts[props.postIndex].title} loading="lazy" />
        </ImageListItem>
    );
}