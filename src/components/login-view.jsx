import React,{useState} from "react";
import './login-view.scss'
const API_URL= "https://movie-api-d90y.onrender.com"

export const LoginView = ({ onLoggedIn }) => {
  //import useState
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();
    const requestData = {
      Username: username,
      Password: password
    };
    try {
      let response = await fetch(`${API_URL}/login?Username=${username}&Password=${password}`, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
      let data = await response.json()
      console.log("Response from api", data)
      if (data.user) {
        onLoggedIn(data.user, data.token);
      } else {
        alert("No such user");
      }
    } 
    catch (error) {
      //right now the api is failing we need to figure out the bug in the api so that the client can be fixed
      alert("Failed to login")
    }
  }    
  
  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Please Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength={3}
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
      <button type="submit">Submit</button>
    </form>
  );
  
};