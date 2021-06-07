import { lazy } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router';

const CharacterRace = lazy(() => import('../Pages/CharacterCreation/CharacterRace'))

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

        </Switch>
    </>
  );
};

export default CreateCharacterRouter;
