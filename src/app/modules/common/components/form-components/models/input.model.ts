import {FormControl} from "@angular/forms";

export interface InputModel {
  name: string;
  label: string;
  errorMsg: string;
  value: any;
  formControl: FormControl;
}
