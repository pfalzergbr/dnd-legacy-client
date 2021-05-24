import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import Loading from '../Components/Loading';
import CharacterList from '../Components/CharacterCreation/CharacterList';
import { AuthActions } from '../Context/AuthContext';
import { GET_CHARACTERS } from '../GraphQL/characterMutations';

const Home = () => {
  const history = useHistory();
  // const { user } = useContext(AuthContext);
  const { handleLogout } = useContext(AuthActions);
  const { loading, data } = useQuery(GET_CHARACTERS);
  const onLogout = () => {
    handleLogout();
  };

  const handleClick = () => {
    history.push('/character-name');
  };

  if (loading) {
    return <Loading />;
  }

  console.log(data.getUser.characters);

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <h1>Yey, You`re in</h1>
      <CharacterList characters={data.getUser.characters} />
      <button onClick={handleClick}>Create a character</button>
    </div>
  );
};

export default Home;
