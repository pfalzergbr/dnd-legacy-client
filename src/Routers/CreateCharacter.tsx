import { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

const CharacterRace = lazy(() => import('../Pages/CharacterCreation/CharacterRace'))

export interface CreateCharacterProps {}

const CreateCharacter: React.FC<CreateCharacterProps> = () => {
  const { path } = useRouteMatch()
  return (
    <>
        <Switch>
          <Route exact path={path}>
            <p>This is where the creation flow starts. Add a dynamic redirect to the computed next step.</p>
          </Route>
          <Route path={`${path}/choose-race`}>
            <CharacterRace />
          </Route>

        </Switch>
    </>
  );
};

export default CreateCharacter;
