import { Link } from "react-router-dom"

export interface StartProps {}

const Start: React.FC<StartProps> = () => {
  return (
    <div>
      <h1>3.5 Wizard</h1>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Start;
