import { createContext, useState, useCallback } from 'react';
import { UserInput } from '../Typings/inputs';

interface IAuthContext {
  user: {
    id: string;
    email: string;
  } | null
}

interface IAuthActions {
  login: (userData: UserInput) => void
  logout: () => void
}

const AuthContext = createContext<IAuthContext>({ user: null });
const AuthActions = createContext<IAuthActions>({} as IAuthActions)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ user: null } as IAuthContext);

  const login = useCallback(({id, email}) => {
    setUser({ user: {id, email}});
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
