import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const API_URL= "https://movie-api-d90y.onrender.com"
import './profile-view.scss'
import { loadUser, updateUser } from '../api/flixApi';
export const ProfileView = (props) => {
    //route stuff
    const {userId} = useParams()
    //display user info
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState("")
    //display favorite movies
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const deregister = async() => {
        //deregister a user
        let t = localStorage.getItem('user-token')
        try {
            
            const response = await fetch(`${API_URL}/users/${userId}`,{
                method: 'DELETE',
                headers: {Authorization: `Bearer ${t}`},
            })
            const userRes = await response.json()
            if(userRes.message){
                alert("User deleted successfully")
                //delete token and user (no longer valid)
                localStorage.removeItem("user-token")
                localStorage.removeItem("user")
                //go to sign-up page
                window.location.href = "signup"
            }
        } catch (error) {
            console.error("Failed to delete user",error)
            alert("Failed to delete user")
        }

    }
    
    handleSubmit = async(e) => {
        e.preventDefault();
        //get the updated values from your form and pass them with the body of the request below
        //update user info
        await updateUser(userId, username,password,email,birthdate)
    }
    loadUserInfo = async() => {
        try {
            
            let userRes = await loadUser(userId)
            if(userRes && userRes.FavoriteMovies){
    
                setUsername(userRes.Username)
                setPassword(userRes.Password)
                setEmail(userRes.Email)
                setBirthdate(userRes.Birthday)
                setFavoriteMovies(userRes.FavoriteMovies)
            }
        } catch (error) {
            alert("Failed loading user")
        }
    }
    useEffect(()=>{
        loadUserInfo()
    },[])
    if(!userId){
        return <div>Loading...</div>
    }
    return (
        <div className="profileView">
            <h1>Profile</h1>
            <Button onClick={deregister} variant='danger'>Delete account</Button>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </label>
                <label>
                    Birthdate
                    <input value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        required/>
                </label>
                <Button type='submit'>Update user</Button>
            </form>
            <div>
                {favoriteMovies.map(m => <div>{m.title}</div>)}
            </div>
        </div>
    );
};

