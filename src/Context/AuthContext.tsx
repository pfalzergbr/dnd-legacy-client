import { createContext, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../GraphQL/authQueries';
import { UserInput } from '../Typings/inputs';

type User = {
  id: string;
  email: string;
} | null

interface IAuthContext {
  user: User
  isAuth: boolean
}

interface IAuthActions {
  handleLogin: (userData: UserInput) => void;
  autoLogin: () => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ user: null, isAuth: false });
export const AuthActions = createContext<IAuthActions>({} as IAuthActions);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null as User);
  const [ getUser ] = useLazyQuery(GET_USER, {onCompleted: () => {}});

  const isAuth = user?.id && user?.email ? true : false

  const handleLogin = useCallback(({ id, email }) => {
    setUser({ id, email });
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null)
  }, []);

  const autoLogin = useCallback(() => {
    getUser()
  }, [getUser]);

  return (
    <AuthContext.Provider value={{user, isAuth}}>
      <AuthActions.Provider value={{ handleLogin, handleLogout, autoLogin }}>
        {children}
      </AuthActions.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
