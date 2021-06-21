export interface IDropdownItem<T> {
  id: string;
  name: string;
  description: T;
  generalTraits: GeneralTrait[];
  checksAndSaves: CheckModifier[];
  favouredClass: string;
  languages: {
    baseLanguages: string[];
    extraLanguages: string[];
  }
}

export interface GeneralTrait {
  traitName: string;
  traitDescription: string;
}

export interface CheckModifier {
  name: string;
  description: string;
}


export interface ILinkControl {
  name: string;
  to: string;
  active: boolean;
}