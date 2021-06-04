import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownItemProps {
  dropdownData: IDropdownItem;
  handleOpenDropdown: (dropdownData: IDropdownItem) => void;
  handleCloseDropdown: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ dropdownData, handleOpenDropdown }) => {
  const openDropdown = () => {
    handleOpenDropdown(dropdownData)
  }
  return (
    <div onClick={openDropdown}>
      <h4>{dropdownData.title}</h4>
    </div>
  );
};

export default DropdownItem;
