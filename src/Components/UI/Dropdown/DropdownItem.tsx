import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownItemProps {
  dropdownData: IDropdownItem<string>;
  handleOpenDropdown: (dropdownData: IDropdownItem<string>) => void;
  isSelected: boolean;
  handleSelect: (dropdownData: IDropdownItem<string>) => void
}

const DropdownItem: React.FC<DropdownItemProps> = ({ dropdownData, handleOpenDropdown, isSelected, handleSelect }) => {
  const openDropdown = () => {
    handleOpenDropdown(dropdownData)
  }

  const selectItem = () => {
    handleSelect(dropdownData);
  }

  console.log(dropdownData);
  
  return (
    <div>
      <h4 onClick={selectItem} style={isSelected ? {background: 'grey'} : {}}>{dropdownData.name }</h4><span onClick={openDropdown}>🔽</span>
    </div>
  );
};

export default DropdownItem;
