import * as tokenService from './tokenService.js';

const BACKEND_URL = 'http://localhost:3000';

const addPost = async (formData) => {
    try {
        const responseFromServer = await fetch(`${BACKEND_URL}/posts`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: "Bearer " + tokenService.getToken()
            }
        });
        const dataFromServer = await responseFromServer.json();
        if (dataFromServer.error) {
            throw dataFromServer.error;
        }
        return dataFromServer;
    } catch (err) {
        throw err;
    }
}

const getPosts = async() => {
    try{
        const responseFromServer = await fetch(`${BACKEND_URL}/posts`, {
            method: 'GET'
        });
        const dataFromServer = await responseFromServer.json();
        return dataFromServer;
    }catch(err){
        console.log(err, 'err post service get post');
        throw err;
    }
}
const getOnePost = async(postId) =>{
    try{
        const responseFromServer = await fetch(`${BACKEND_URL}/posts/${postId}`, {
            method:'GET',
            Authorization: 'Bearer ' + tokenService.getToken
        });
        const dataFromServer = responseFromServer.json();
        return dataFromServer;
    }catch(err) {
        console.log(err);
    }
}

const deletePost = async(postId) => {
    try{
        const responseFromServer = await fetch(`${BACKEND_URL}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer " + tokenService.getToken()
            }
        });
        const dataFromServer = await responseFromServer.json();
        if (dataFromServer.error) {
            throw dataFromServer.error;
        }
        return dataFromServer;
    }catch(err) {
        console.log(err, 'err post service delete post');
        throw err;
    }
}

export {
    addPost,
    getPosts,
    getOnePost,
    deletePost
}