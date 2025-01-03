import { Link } from "react-router-dom";
import React from 'react';
export const NavBar =(props) => {
    let {user, onLogout} = props;
    if(!user || !user.Username || !user._id){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                
            </div>
        )
    }
    return (
        <div>
            <div>{user.Username}</div>    
            <Link to={`/`}>Movies</Link>
            <Link to={`/profile/${user._id}`}>Profile</Link>
        </div>  
    )
}