import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <AuthTemplate>
      <AuthHeader />
      Login page
      </AuthTemplate>
  );
};

export default Login;
