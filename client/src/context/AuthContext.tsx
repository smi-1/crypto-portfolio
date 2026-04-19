import { createContext, useContext, useState } from "react";

interface User {
    id: number;
    username: string;
    email: string;
    avatar?: string;
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
const FAKE_USERS = [
    { id: 1, username: "alice", email: "alice@test.com", token: "token-alice" },
];
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        const token = localStorage.getItem("token");
        if (!token) return null;
        return FAKE_USERS.find(u => u.token === token) ?? null;
    });

    function login(userData: User) {
        setUser(userData);
        localStorage.setItem("token", userData.token);
    }
    function logout() {
        setUser(null);
        localStorage.removeItem("token");
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth måste användas inuti <AuthProvider>");
    }
    return context;
}