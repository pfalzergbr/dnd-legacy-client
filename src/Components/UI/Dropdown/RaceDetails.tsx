import { IDropdownItem } from '../../../Typings/UI';

const RaceDetails = ({selectedItem, handleCloseDropdown}: {
  selectedItem: IDropdownItem<string>,
  handleCloseDropdown: () => void}
) => {
  return (
    <div>
      <div onClick={handleCloseDropdown}>
        <h4>{selectedItem?.name}🔼</h4>
      </div>
      <div>
        <p>{selectedItem?.description}</p>
        <br></br>
        <div>
          <h3>Racial Traits</h3>
          <h4>General</h4>
          <ul>
            {selectedItem?.generalTraits.map((trait) => (
              <div>
                <strong>{trait.traitName}</strong>
                <p>{trait.traitDescription}</p>
              </div>
            ))}
          </ul>
          <h4>Checks and Saves</h4>
          <ul>
            {selectedItem?.checksAndSaves.map((modifier) => (
              <div>
                <strong>{modifier.name}</strong>
                <p>{modifier.description}</p>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <strong>Base</strong>
          <ul>
            {selectedItem?.languages.baseLanguages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
          <strong>Bonus</strong>
          <ul>
            {selectedItem?.languages.extraLanguages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Favoured Class: {selectedItem?.favouredClass} </h4>
          <p>
            A multiclass {selectedItem?.name}’s {selectedItem?.favouredClass}{' '}
            class does not count when determining whether she take an experience
            point penalty for multiclassing.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RaceDetails;
