import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Yey, You`re in</h1>
      <p>TEST: Your e-mail is {user?.email}</p>
      <button>Create a character</button>
    </div>
  );
};

export default Home;
