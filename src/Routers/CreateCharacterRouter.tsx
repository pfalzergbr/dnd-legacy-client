import { lazy } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router';

const CharacterRace = lazy(() => import('../Pages/CharacterCreation/CharacterRace'))
const CharacterClass = lazy(() => import('../Pages/CharacterCreation/CharacterClass'))
const CharacterAbilities = lazy(() => import('../Pages/CharacterCreation/CharacterAbilities'))
export interface CreateCharacterRouterProps {
  nextLink: string;
}

const CreateCharacterRouter: React.FC<CreateCharacterRouterProps> = ({nextLink}) => {
  const { path } = useRouteMatch()
  
  return (
    <>
        <Switch>
          <Redirect exact from={path} to={nextLink} />
          {/* <Route exact path={path}>
            <p>This is where the creation flow starts. Add a dynamic redirect to the computed next step.</p>
          </Route> */}
          <Route path={`${path}/choose-race`}>
            <CharacterRace />
          </Route>
          <Route path={`${path}/choose-class`}>
            <CharacterClass />
          </Route>
          <Route path={`${path}/abilities`}>
            <CharacterAbilities />
          </Route>

        </Switch>
    </>
  );
};

export default CreateCharacterRouter;
