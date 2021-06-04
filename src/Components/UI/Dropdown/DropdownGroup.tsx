import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownGroupProps {
  items: IDropdownItem[];
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem | null>(null);

  const handleOpenDropdown = (dropdownData: IDropdownItem) => {
    setSelectedItem(dropdownData);
  };

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

  const DropdownList = (
    <div>
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          dropdownData={item}
          handleOpenDropdown={handleOpenDropdown}
        />
      ))}
    </div>
  );

  const Details = (
    <div>
      <div onClick={handleCloseDropdown}>
        <h4>{selectedItem?.title}🔼</h4>
      </div>
      <p>{selectedItem?.details}</p>
    </div>
  );

  return <>{selectedItem ? Details : DropdownList}</>;
};

export default DropdownGroup;
