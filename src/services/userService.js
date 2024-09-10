import * as tokenService from './tokenService.js';

const BACKEND_URL = 'http://localhost:3000';

const getUser = () => {
    const token = tokenService.getToken();
    if (!token) {
        return null;
    }
    const user = tokenService.getUserFromToken(token);
    return user;
}

const getProfileUser = async (username) => {
    try {
        const responseFromServer = await fetch(`${BACKEND_URL}/users/user/${username}`, {
            method: 'GET'
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

const signup = async (form) => {
    try {
        const responseFromServer = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            body: form
        });
        const dataFromServer = await responseFromServer.json();
        if (dataFromServer.error) {
            throw dataFromServer.error;
        }
        if (dataFromServer.token) {
            tokenService.setToken(dataFromServer.token);
            const user = tokenService.getUserFromToken(dataFromServer.token);
            return user;
        }
    } catch (err) {
        throw err;
    }
}

const signin = async (form) => {
    try {
        const responseFromServer = await fetch(`${BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const dataFromServer = await responseFromServer.json();
        if (dataFromServer.error) {
            throw (dataFromServer.error);
        }
        if (dataFromServer.token) {
            tokenService.setToken(dataFromServer.token);
            const user = tokenService.getUserFromToken(dataFromServer.token);
            return user;
        }
    } catch (err) {
        throw err;
    }
}

const signout = () => {
    tokenService.removeToken();
}

export {
    signup,
    signin,
    signout,
    getUser,
    getProfileUser
}