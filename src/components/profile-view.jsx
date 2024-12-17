import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const API_URL= "https://movie-api-d90y.onrender.com"
export const ProfileView = (props) => {
    const {userId} = useParams()
    //display user info
    const [user, setUser] = useState()
    //display favorite movies
    const [favoriteMovies, setFavoriteMovies] = useState([])
    deregister = async() => {
        //deregister a user
        let t = localStorage.getItem('user-token')
        const response = await fetch(`${API_URL}/users/${userId}`,{
            method: 'DELETE',
            headers: {Authorization: `Bearer ${t}`},
        })
        const userRes = await response.json()
    }
    
    handleSubmit = async() => {
        //get the updated values from your form and pass them with the body of the request below
        //update user info
        let t = localStorage.getItem('user-token')
        const response = await fetch(`${API_URL}/users/${userId}`,{
            method: 'PUT',
            headers: {Authorization: `Bearer ${t}`},
            body: {}
        })
        const userRes = await response.json()
        setUser(userRes)
    }
    loadUserInfo = async() => {
        let t = localStorage.getItem('user-token')
        const response = await fetch(`${API_URL}/users/${userId}`,{
            method: 'GET',
            headers: {Authorization: `Bearer ${t}`},
        })
        const userRes = await response.json()
        setUser(userRes)
        setFavoriteMovies(userRes.favoriteMovies)
    }
    useEffect(()=>{
        loadUserInfo()
    },[])
    return (
        <div className="profileView">
            <h1>Profile</h1>
            <Button onClick={deregister} variant='danger'>Delete account</Button>
            <form onSubmit={handleSubmit}>
                <input placeholder='username'/>
                <input placeholder='password'/>
                <input placeholder='email'/>
                <input placeholder='birthdate'/>
                <Button type='submit'>Update user</Button>
            </form>
            <div>
                {favoriteMovies.map(m => <div>{m.title}</div>)}
            </div>
        </div>
    );
};

