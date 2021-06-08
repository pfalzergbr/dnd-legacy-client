import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import Loading from '../Components/Loading';
import CharacterList from '../Components/CharacterCreation/CharacterList';
import { AuthActions } from '../Context/AuthContext';
import { GET_CHARACTERS } from '../GraphQL/characterQueries';

const Home = () => {
  const history = useHistory();
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

      {data.getUser.characters.length < 5 ? <button onClick={handleClick}>Create a character</button> : 
      <div> <p>Your character list is full</p>
      <p>Delete a character to make some space</p></div>}
    </div>
  );
};

export default Home;
