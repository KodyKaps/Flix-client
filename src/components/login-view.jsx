import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
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
      
      alert("Failed to login")
    }
  }    
  
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3" 
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};