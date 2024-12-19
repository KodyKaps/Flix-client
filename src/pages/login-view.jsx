import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import './login-view.scss'
import {login} from '../api/flixApi'
export const LoginView = ({ onLoggedIn }) => {
  //import useState
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();
    try{
      let data = await login(username,password)
      console.log("Response from api", data)
      if (data.user) {
        storeUser(data.user)
        storeToken(data.token);
        window.location.href='/'
      } else {
        alert("No such user");
      }
    } 
    catch (error) {
      console.error("login failed", error)
      alert("login failed")
    }
  }    

  //store in ls and your component state
  function storeToken(t){
    localStorage.setItem('user-token', t)
    
  }
  function storeUser(u){
    localStorage.setItem('user', JSON.stringify(u))
    
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