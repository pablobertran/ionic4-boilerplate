import {InputModel} from "./input.model";

export interface RadioButtonOptionModel {
  value: any;
  label: string | number;
}

export interface RadioButtonModel extends InputModel {
  options: RadioButtonOptionModel[];
}
