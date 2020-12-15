import {InputModel} from "./input.model";

export interface InputFieldModel extends InputModel{
  type: string;
  placeholder: "number" | "text" | "tel" | "password";
}
