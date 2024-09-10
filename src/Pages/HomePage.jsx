import { useState, useEffect } from "react";
import * as postService from '../services/postService';
import { PageHeader } from "../Components/PageHeader";
import { PostFeed } from "../Components/PostFeed";
import { HomePageHeader } from "../Components/HomePageHeader";

export const HomePage = (props) => {
    const [posts, setPosts] = useState();
    const [postIndex, setPostIndex] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            const data = await postService.getPosts();
            const postsArray = data.posts;
            setPosts(postsArray);
            props.setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            <PageHeader user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <HomePageHeader />
            <PostFeed posts={posts} loading={props.loading} setLoading={props.setLoading} postIndex={postIndex} setPostIndex={setPostIndex} />
        </>
    );
}