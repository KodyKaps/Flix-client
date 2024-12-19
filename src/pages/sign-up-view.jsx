import React,{useState} from "react";
import './login-view.scss'
import { login, signupUser } from "../api/flixApi";



export const SignupView = ({  }) => {
  //import useState
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const handleSubmit = async (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();
    try{

      let signupResponse = await signupUser(username, password, email, birthdate)
      let loginResponse = await login(username,password)
      if (!loginResponse.user || !loginResponse.token) {
        alert("Failed to login user");
      }
      window.location.href = '/'
      storeUser(loginResponse.user)
      storeToken(loginResponse.token)
    } 
    catch (error) {
      console.error("Failed to create user", error)
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
      <button type="submit">Submit</button>
    </form>
  );
  
};