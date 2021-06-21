export interface IDropdownItem<T> {
  id: string;
  name: string;
  details: T;
}

export interface ILinkControl {
  name: string;
  to: string;
  active: boolean;
}