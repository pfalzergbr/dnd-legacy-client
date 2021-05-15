import { createContext, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { UserInput } from '../Typings/inputs';
import { client } from '../Services/client'
import { LOGOUT } from '../GraphQL/authQueries';

type User = {
  id: string;
  email: string;
} | null;

interface IAuthContext {
  user: User;
  isAuth: boolean;
}

interface IAuthActions {
  handleLogin: (userData: UserInput) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isAuth: false,
});
export const AuthActions = createContext<IAuthActions>({} as IAuthActions);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null as User);
  const [logout] = useLazyQuery(LOGOUT)

  const isAuth = user?.id && user?.email ? true : false;

  const handleLogin = useCallback(({ id, email }) => {
    setUser({ id, email });
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await logout()
      setUser(null);
      client.clearStore()
    } catch (error) {
      console.log(error)
    }
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, isAuth }}>
      <AuthActions.Provider value={{ handleLogin, handleLogout }}>
        {children}
      </AuthActions.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
