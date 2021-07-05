import AbilityHeader from './AbilityHeader';

export interface AbilityClassicRollProps {}

const AbilityClassicRoll: React.SFC<AbilityClassicRollProps> = () => {
  return (
    <div>
      <AbilityHeader />
      Classic roll
    </div>
  );
};

export default AbilityClassicRoll;
