import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as postService from '../services/postService';
import { PageHeader } from "../Components/PageHeader";
import { ShowPost } from "../Components/ShowPost";


export const ShowPostPage = (props) => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
    const getPost = async () => {
        try {
            props.setLoading(true)
            const data = await postService.getOnePost(id);
            setPost(data.post);
            props.setLoading(false);
        } catch (err) {
            console.log(err);
            props.setLoading(false);
        }
    }
    useEffect(() => {
        getPost();
    }, [id]);
    return (
        <>
            <PageHeader post={post} user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <ShowPost post={post} user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
        </>
    );
}