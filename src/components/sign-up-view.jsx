import React,{useState} from "react";
import './login-view.scss'

const API_URL= "https://movie-api-d90y.onrender.com"

export const SignupView = ({ onSignup }) => {
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
      let response = await fetch(`${API_URL}/users`, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
      let data = response.json()
      if (data.user) {
        onSignup(data.user);
      } else {
        alert("No such user");
      }
    } 
    catch (error) {
      alert("Failed to login")
    }
  }    
  
  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Signup to create an account</h1>
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
      <button type="submit">Submit</button>
    </form>
  );
  
};