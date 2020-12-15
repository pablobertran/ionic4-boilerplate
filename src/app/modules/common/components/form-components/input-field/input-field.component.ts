import {Component, Input} from "@angular/core";
import {InputFieldModel} from "../models/input-field.model";

@Component({
  selector: 'checkbox-component',
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent {
  @Input() settings: InputFieldModel = null;

  constructor() {
  }

  togglePassword() {
    this.settings.type = this.settings.type === 'password' ? 'text' : 'password';
  }
}
