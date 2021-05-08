import AuthNav from '../Components/AuthNav';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <AuthNav />
      <p>Login Page</p>
    </div>
  );
};

export default Login;
