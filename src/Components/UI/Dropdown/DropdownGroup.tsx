import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownGroupProps {
  // Fix the generics here, once figured out how to.
  items: any[];
  contentElement: any;
  // Add typing here, and possibly generics.
  chooseItem: (choiceId: string) => void;
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({
  items,
  contentElement,
  chooseItem,
}) => {
  const [selectedItem, setSelectedItem] =
    useState<IDropdownItem<string> | null>(null);
  const [ isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenDropdown = (dropdownData: IDropdownItem<string>) => {
    setSelectedItem(dropdownData);
    setIsDropdownOpen(true);
  };

  const handleSelect = (dropdownData: IDropdownItem<string>) => {
    setSelectedItem(dropdownData)
  };

  const handleCloseDropdown = () => {
    setSelectedItem(null);
    setIsDropdownOpen(false);
  };

  const handleChoice = () => {
    if (selectedItem) chooseItem(selectedItem.id);
  };

  const DetailsElement = contentElement;

  const collapsedButtons = (
    <div>
      <button disabled={!selectedItem} onClick={handleChoice} type='button'>
        Next
      </button>
    </div>
  );

  const openButtons = (
    <div>
      <button onClick={handleChoice} type='button'>
        Choose
      </button>
      <button onClick={handleCloseDropdown}>
        Cancel
      </button>
    </div>
  );

  const DropdownList = (
    <div>
      <div>
        {items.map((item) => (
          <DropdownItem
            key={item.id}
            dropdownData={item}
            handleOpenDropdown={handleOpenDropdown}
            handleSelect={handleSelect}
            isSelected={selectedItem && selectedItem?.id === item.id ? true : false}
          />
        ))}
      </div>
      {collapsedButtons}
    </div>
  );

  return (
    <>
      {selectedItem && isDropdownOpen ? (
        <>
        <DetailsElement
          selectedItem={selectedItem}
          handleCloseDropdown={handleCloseDropdown}
        />
        {openButtons}
        </>
      ) : (
        DropdownList
      )}
    </>
  );
};

export default DropdownGroup;
