export const NavBar =(props) => {
    let {user} = props;
    return (
        <div>
            <div>{user.name}</div>
        </div>  
    )
}