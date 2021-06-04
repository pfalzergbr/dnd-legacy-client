import { useHistory } from "react-router";


export interface MainNavProps {}


const MainNav: React.FC<MainNavProps> = () => {
  const history = useHistory();

  return (
    <div>
      <nav>
        <button onClick={() => history.push('/home')}>🧙</button>
      </nav>
      <hr />
    </div>
  );
};

export default MainNav;
