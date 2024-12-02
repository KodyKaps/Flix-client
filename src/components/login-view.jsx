import React from "react";

export const LoginView = ({ onLoggedIn }) => {
    fetch("https://openlibrary.org/account/login.json", {
        method: "POST",
        body: JSON.stringify(data)
      }).then((response) => {
        if (response.ok) {
          onLoggedIn(username);
        } else {
          alert("Login failed");
        }
      });
    const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();
    ;

    const data = {
      access: username,
      secret: password
    };

    //import useState
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    fetch("https://openlibrary.org/account/login.json", {
      method: "POST",
      body: JSON.stringify(data)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};