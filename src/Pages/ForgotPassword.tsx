import { useState } from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../Components/Auth/Forms/ForgotPasswordForm';
import { ForgotInputs } from '../Typings/inputs';
//TODO - Add error message after failed request


const ForgotPassword: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const onSubmit = (data: ForgotInputs) => {
    // alert(`email: ${data.email}`);
    setIsSubmitted(true);
  };

  const forgotPasswordForm = (
    <div>
      <h1>Where should we send the email?</h1>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </div>
  );

  const successMessage = (
    <div>
      <h1>Password reset email successfully sent.</h1>
      <Link to='/login'>Back to log in</Link>
    </div>
  );

  return (
    <div>
      <button onClick={() => history.goBack()}>x</button>
      {isSubmitted ? successMessage : forgotPasswordForm}
    </div>
  );
};

export default ForgotPassword;
