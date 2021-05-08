import AuthNav from '../Components/AuthNav';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div>
      <AuthNav />
      <p>Register Page</p>
    </div>
  );
};

export default Register;
