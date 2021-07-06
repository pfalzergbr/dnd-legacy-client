import AbilityDropBox from './AbilityDropBox';

export interface AbilityDropFieldsProps {}

const AbilityDropFields: React.FC<AbilityDropFieldsProps> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '600px', flexWrap: 'wrap', justifyContent: 'center'}}>
      <AbilityDropBox label='Strength' />
      <AbilityDropBox label='Dexterity' />
      <AbilityDropBox label='Constitution' />
      <AbilityDropBox label='Intelligence' />
      <AbilityDropBox label='Charisma' />
      <AbilityDropBox label='Wisdom' />
    </div>
  );
};

export default AbilityDropFields;
