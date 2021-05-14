import { createContext, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../GraphQL/authQueries';
import { UserInput } from '../Typings/inputs';

interface IAuthContext {
  user: {
    id: string;
    email: string;
  } | null;
}

interface IAuthActions {
  login: (userData: UserInput) => void;
  autoLogin: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ user: null });
export const AuthActions = createContext<IAuthActions>({} as IAuthActions);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ user: null } as IAuthContext);
  const [ getUser ] = useLazyQuery(GET_USER, {onCompleted: () => {}});

  const login = useCallback(({ id, email }) => {
    setUser({ user: { id, email } });
  }, []);

  const logout = useCallback(() => {
    setUser({user: null})
  }, []);

  const autoLogin = useCallback(() => {
    getUser()
  }, [getUser]);

  return (
    <AuthContext.Provider value={user}>
      <AuthActions.Provider value={{ login, logout, autoLogin }}>
        {children}
      </AuthActions.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
