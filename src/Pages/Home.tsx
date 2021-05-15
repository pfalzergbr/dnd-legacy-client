import { useContext } from 'react'
import { AuthActions, AuthContext } from '../Context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext)
  const { handleLogout } = useContext(AuthActions);

  const onLogout = () => {
    handleLogout()
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <h1>Yey, You`re in</h1>
      <p>TEST: Your e-mail is {user?.email}</p>
      <button>Create a character</button>
    </div>
  );
};

export default Home;
