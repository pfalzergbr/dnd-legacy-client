import { IDropdownItem } from '../../../Typings/UI';

export interface DropdownItemProps {
  dropdownData: IDropdownItem<string>;
  handleOpenDropdown: (dropdownData: IDropdownItem<string>) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ dropdownData, handleOpenDropdown }) => {
  const openDropdown = () => {
    handleOpenDropdown(dropdownData)
  }
  return (
    <div onClick={openDropdown}>
      <h4>{dropdownData.name}🔽</h4>
    </div>
  );
};

export default DropdownItem;
