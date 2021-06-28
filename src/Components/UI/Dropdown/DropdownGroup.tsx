import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownGroupProps {
  items: IDropdownItem<string>[];
  contentElement: any;
  chooseItem: (item: string) => void;
  // Add typing here, and possibly generics.
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({
  items,
  contentElement,
  chooseItem
}) => {
  const [selectedItem, setSelectedItem] =
    useState<IDropdownItem<string> | null>(null);

  const [highlightedItem, setHighlightedItem] = useState('');

  const handleOpenDropdown = (dropdownData: IDropdownItem<string>) => {
    setSelectedItem(dropdownData);
    chooseItem(dropdownData.id);
  };

  const handleSelect = (id: string) => {
    chooseItem(id);
    setHighlightedItem(id);
  }

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

  const DetailsElement = contentElement;

  const collapsedButtons = (
    <div>
      <button>Next</button>
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
            isSelected={highlightedItem === item.id ? true : false}
          />
        ))}
      </div>
      {collapsedButtons}
    </div>
  );

  return (
    <>
      {selectedItem ? (
        <DetailsElement
          selectedItem={selectedItem}
          handleCloseDropdown={handleCloseDropdown}
        />
      ) : (
        // <RaceDetails selectedItem={selectedItem} handleCloseDropdown={handleCloseDropdown}/>
        DropdownList
      )}
    </>
  );
};

export default DropdownGroup;
