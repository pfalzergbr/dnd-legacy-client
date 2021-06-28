import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownGroupProps {
  items: IDropdownItem<string>[];
  contentElement: any;
  // Add typing here, and possibly generics.
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({
  items,
  contentElement,
}) => {
  const [selectedItem, setSelectedItem] =
    useState<IDropdownItem<string> | null>(null);

  const handleOpenDropdown = (dropdownData: IDropdownItem<string>) => {
    setSelectedItem(dropdownData);
  };

  const DetailsElement = contentElement;

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

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
