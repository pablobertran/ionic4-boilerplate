import {InputModel} from "./input.model";

export interface ComboboxOption  {
  value: any;
  label: string | number;
}

export interface ComboboxModel extends InputModel {
  options: ComboboxOption[];
  value: ComboboxOption;
}
