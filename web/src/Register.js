import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", { username, password });
      alert("Registered successfully!");
      navigate("/"); // go to login
    } catch (err) {
      alert("Error: " + err.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}