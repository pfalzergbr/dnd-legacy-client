import { useQuery } from '@apollo/client';
import { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthActions, AuthContext } from '../Context/AuthContext'
import { GET_CHARACTERS } from '../GraphQL/characterMutations';

const Home = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const { handleLogout } = useContext(AuthActions);
  const { loading } = useQuery(GET_CHARACTERS);
  const onLogout = () => {
    handleLogout()
  }

  const handleClick = () => {
    history.push('/character-name')
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <h1>Yey, You`re in</h1>
      <p>TEST: Your e-mail is {user?.email}</p>
      <button onClick={handleClick}>Create a character</button>
    </div>
  );
};

export default Home;
