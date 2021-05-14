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
  login: (userData: UserInput) => void;
  autoLogin: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ user: null, isAuth: false });
export const AuthActions = createContext<IAuthActions>({} as IAuthActions);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null as User);
  const [ getUser ] = useLazyQuery(GET_USER, {onCompleted: () => {}});

  const isAuth = user?.id && user?.email ? true : false

  const login = useCallback(({ id, email }) => {
    setUser({ id, email });
  }, []);

  const logout = useCallback(() => {
    setUser(null)
  }, []);

  const autoLogin = useCallback(() => {
    getUser()
  }, [getUser]);

  return (
    <AuthContext.Provider value={{user, isAuth}}>
      <AuthActions.Provider value={{ login, logout, autoLogin }}>
        {children}
      </AuthActions.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
