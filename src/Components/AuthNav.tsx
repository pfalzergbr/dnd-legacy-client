import { Link } from 'react-router-dom';

export interface AuthNavProps {}

const AuthNav: React.FC<AuthNavProps> = () => {
  return (
    <nav className='dummynav'>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </nav>
  );
};
export default AuthNav;
