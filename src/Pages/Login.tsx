import AuthTemplate from '../Templates/AuthTemplate';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <AuthTemplate>Login page</AuthTemplate>
  );
};

export default Login;
