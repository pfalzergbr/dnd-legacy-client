import AuthHeader from '../Components/Auth/AuthHeader';
import AuthTemplate from '../Templates/AuthTemplate';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <AuthTemplate>
      <AuthHeader />
      <form action='submit'>
        <div className='formControl'>
          <label htmlFor='email'>E-mail</label>
          <input type='text' name='email' id='email' />
        </div>
        <div className='formControl'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>
      </form>
    </AuthTemplate>
  );
};

export default Login;
