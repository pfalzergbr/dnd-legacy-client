import { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

const AbilityClassicRoll = lazy(() => import('../Components/CharacterCreation/Abilities/AbilityClassicRoll'))
const AbilityPointBuy = lazy(() => import('../Components/CharacterCreation/Abilities/AbilityPointBuy'))
const AbilityMethod = lazy(() => import('../Components/CharacterCreation/Abilities/AbilityMethod'))

export interface GenerateAbilityRouterProps {
  
}

const GenerateAbilityRouter: React.FC<GenerateAbilityRouterProps> = () => {
  const { path } = useRouteMatch()

  
  return (
    <>
        <Switch>
          <Route exact path={`${path}`}>
            <AbilityMethod />
          </Route>
          <Route path={`${path}/point-buy`}>
            <AbilityPointBuy />
          </Route>
          <Route path={`${path}/classic-roll`}>
            <AbilityClassicRoll />
          </Route>
        </Switch>
    </>
  );
};

export default GenerateAbilityRouter;