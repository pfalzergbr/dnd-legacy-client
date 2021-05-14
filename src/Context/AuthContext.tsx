import { createContext, useState, useCallback } from 'react';

interface IAuthContext {
  user: {
    id: string;
    email: string;
  } | null
}

interface IAuthActions {
  login: () => void
  logout: () => void
}

const AuthContext = createContext<IAuthContext>({ user: null });
const AuthActions = createContext<IAuthActions>({} as IAuthActions)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ user: null });

  const login = useCallback(() => {
    setUser({ user: null });
  }, []);

  const logout = useCallback(() => {}, [])

  return (
    <AuthContext.Provider value={user}>
      <AuthActions.Provider value={{login, logout}}>
      {children}
      </AuthActions.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
