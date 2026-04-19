import { useAuth } from "../context/AuthContext";
export function TestMessage() {
    const { user } = useAuth();
    return (
        <p className="testing">{user?.username} inloggad HEHEHE</p>
    )
}