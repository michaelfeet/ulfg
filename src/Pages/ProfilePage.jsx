import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as userService from '../services/userService';
import { PageHeader } from "../Components/PageHeader";
import { ProfileFeed } from "../Components/ProfileFeed";

export const ProfilePage = (props) => {
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const { username } = useParams();
    const getProfile = async () => {
        try {
            props.setLoading(true);
            const data = await userService.getProfileUser(username);
            setPosts(data.data);
            props.setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProfile();
    }, [username]);
    return (
        <>
            <PageHeader user={props.user} handleLogOut={props.handleLogOut} loading={props.loading} setLoading={props.setLoading} />
            <ProfileFeed user={props.user} posts={posts} setPosts={setPosts} profileUser={profileUser} setProfileUser={setProfileUser} setLoading={props.setLoading} loading={props.loading} />
        </>
    );
}