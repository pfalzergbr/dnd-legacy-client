export interface IDropdownItem<T> {
  id: string;
  title: string;
  details: T;
}

export interface ILinkControl {
  name: string;
  to: string;
  active: boolean;
}