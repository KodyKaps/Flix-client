export const NavBar =(props) => {
    let {user, onLogout} = props;
    return (
        <div>
            <div>{user.Username}</div>    
            <button onClick={() => { onLogout() }}>Logout</button>
        </div>  
    )
}