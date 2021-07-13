import { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { AbilityProvider } from '../Context/AbilityContext';

const AbilityClassicRoll = lazy(
  () =>
    import(
      '../Components/CharacterCreation/Abilities/ClassicRoll/AbilityClassicRoll'
    )
);
const AbilityPointBuy = lazy(
  () => import('../Components/CharacterCreation/Abilities/AbilityPointBuy')
);
const AbilityMethod = lazy(
  () => import('../Components/CharacterCreation/Abilities/AbilityMethod')
);
const AbilityCustom = lazy(
  () => import('../Components/CharacterCreation/Abilities/Custom/AbilityCustom')
);

export interface GenerateAbilityRouterProps {
  // abilities: Object | null;
}

const GenerateAbilityRouter: React.FC<GenerateAbilityRouterProps> = () => {
  const { path } = useRouteMatch();

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
          <AbilityProvider>
            <AbilityClassicRoll />
          </AbilityProvider>
        </Route>
        <Route path={`${path}/custom`}>
          <p>Custom</p>
          <AbilityCustom />
        </Route>
      </Switch>
    </>
  );
};

export default GenerateAbilityRouter;
