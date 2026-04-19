// components/LoginForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from '../components/Routes';

// Hårdkodade "användare" tills databasen är uppe
const FAKE_USERS = [
    { id: 1, username: "alice", email: "alice@test.com", password: "1234", token: "token-alice" },
    { id: 2, username: "bob",   email: "bob@test.com",   password: "abcd", token: "token-bob"   },
];


export function FormLogin() {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");
    const navigate = useNavigate();
    function handleLogin() {
        const found = FAKE_USERS.find(
            (u) => u.username === username && u.password === password
        );

        if (!found) {
            setError("Fel användarnamn eller lösenord");
            return;
        }

        // Skicka in utan password till contexten
        const { password: _, ...userData } = found;
        login(userData);
        navigate(ROUTES.DASHBAR);
    }
    
    return (
        <form className="form_login form_style">
            
            <div className="form_extra">Log in</div>
            <label htmlFor="">
                <p className="form_title">Username</p>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label htmlFor="">
                <p className="form_title">Password</p>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="btn-login-wrap"><button className="btn-login" type="button" onClick={handleLogin}>Log in</button></div>
            
        </form>
    )
}