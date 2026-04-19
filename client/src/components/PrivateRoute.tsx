import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" />;  // Skicka till login om ej inloggad

    return <>{children}</>;
}