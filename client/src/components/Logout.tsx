import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
         <div className="btn-login-wrap"><button className="btn-login" onClick={handleLogout}>Log out</button></div>
    );
}