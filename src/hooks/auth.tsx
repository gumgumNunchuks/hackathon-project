import { createContext, useState, ReactNode, useContext } from "react";
import { User } from "../shared/interfaces/user.interface";

interface AuthContext {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    register: (name: string, email: string, password: string) => Promise<void>
    logout: () => void
}
const AuthContext = createContext<AuthContext>({
    user: null,
    login: async () => {},
    register: async () => {},
    logout: async () => {}
});

interface AuthProvider {
    children: ReactNode
}
export function AuthProvider({ children }: AuthProvider) {
    const auth = useAuthProvider();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthProvider() {
    const [user, setUser] = useState(null);

    const login = async (_email: string, _password: string) => { }
    const register = async (_name: string, _email: string, _password: string) => { }
    const logout = async () => { setUser(null) }

    return {
        user,
        login,
        register,
        logout
    }
}

export function useAuth() {
    return useContext(AuthContext)
}
