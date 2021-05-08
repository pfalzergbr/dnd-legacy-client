import { NavLink } from 'react-router-dom';

export interface AuthNavProps {}

const AuthNav: React.FC<AuthNavProps> = () => {
  return (
    <nav >
      <NavLink to={'/login'}>Log In</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </nav>
  );
};
export default AuthNav;
