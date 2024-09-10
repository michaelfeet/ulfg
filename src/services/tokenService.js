const createToken = (createdUser) => {
    return jwt.sign({ user: createdUser }, process.env.JWT_SECRET);
}

const setToken = (token) => {
    token
        ? localStorage.setItem('token', token)
        : localStorage.removeItem('token');
}

const getToken = () => {
    let token = localStorage.getItem('token');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token;
}

const getUserFromToken = () => {
    const token = getToken();
    return JSON.parse(atob(token.split('.')[1])).user;
}

const removeToken = () => {
    localStorage.removeItem('token');
}

export {
    createToken,
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
}