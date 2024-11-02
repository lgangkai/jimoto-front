const accessTokenKey = "accessToken"

function setToken(token) {
    localStorage.setItem(accessTokenKey, token)
}

function getToken() {
    return localStorage.getItem(accessTokenKey)
}

function removeToken() {
    localStorage.removeItem(accessTokenKey)
}

export {
    setToken,
    getToken,
    removeToken,
};