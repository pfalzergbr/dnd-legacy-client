import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { IDropdownItem } from '../../../Typings/UI';
import RaceDetails from './RaceDetails';

export interface DropdownGroupProps {
  items: IDropdownItem<string>[];
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] =
    useState<IDropdownItem<string> | null>(null);

  const handleOpenDropdown = (dropdownData: IDropdownItem<string>) => {
    setSelectedItem(dropdownData);
  };

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

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
      <div>
        <button>Next</button>
      </div>
    </div>
  );


  return <>{selectedItem ? 
    // Details
  <RaceDetails selectedItem={selectedItem} handleCloseDropdown={handleCloseDropdown}/> 
  : DropdownList}</>;
};

export default DropdownGroup;
