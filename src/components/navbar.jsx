import { Link } from "react-router-dom";

export const NavBar =(props) => {
    let {user, onLogout} = props;
    if(!user){
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    }
    return (
        <div>
            <div>{user.Username}</div>    
            
        </div>  
    )
}