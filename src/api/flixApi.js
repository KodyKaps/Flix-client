export const API_URL= "https://movie-api-d90y.onrender.com"

export function retrieveToken(){
    let t = localStorage.getItem('user-token')

    return t
}

export function retrieveUser(){
    let u = JSON.parse(localStorage.getItem('user'))
    return u
}

export function storeToken(t){
    localStorage.setItem('user-token', t)
}
export function storeUser(u){
    localStorage.setItem('user', JSON.stringify(u))
}

export async function signupUser(username, password, email, birthdate){
    const requestData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthdate
    };

    let response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(requestData)
    })
    return await response.json()
}

export async function login(username,password){
    const requestData = {
        Username: username,
        Password: password
    };
    
    let response = await fetch(`${API_URL}/login?Username=${username}&Password=${password}`, {
        method: "POST",
        body: JSON.stringify(requestData)
    })
    let data = await response.json()
    return data;
}

export async function loadUser(userId){
    let t = retrieveToken()
    const response = await fetch(`${API_URL}/users/${userId}`,{
        method: 'GET',
        headers: {Authorization: `Bearer ${t}`},
    })
    const userRes = await response.json()
    return userRes;
}


export async function updateUser(userId, username, password, email, birthdate){
    let t = retrieveToken()
    const requestData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthdate
    };
    const response = await fetch(`${API_URL}/users/${userId}`,{
        method: 'PUT',
        headers: {Authorization: `Bearer ${t}`},
        body: JSON.stringify(requestData)
    })
    const userRes = await response.json()
    return userRes
}

export async function addFavoriteMovie(userId,movieId){
    let t = retrieveToken()
    const requestData = {
        movieId
    };
    
    let response = await fetch(`${API_URL}/users/${userId}/favorite-movies`, {
        method: "POST",
        headers: {Authorization: `Bearer ${t}`},
        body: JSON.stringify(requestData)
    })
    let data = await response.json()
    return data;
}

export async function deleteFavoriteMovie(userId,movieId){
    let t = retrieveToken()
    let response = await fetch(`${API_URL}/users/${userId}/favorite-movies/${movieId}`, {
        method: "DELETE",
        headers: {Authorization: `Bearer ${t}`},
    })
    let data = await response.json()
    return data;
}