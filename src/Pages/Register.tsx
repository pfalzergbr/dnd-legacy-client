import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <AuthTemplate>
      <AuthHeader />
      Register page
    </AuthTemplate>
  );
};

export default Register;
