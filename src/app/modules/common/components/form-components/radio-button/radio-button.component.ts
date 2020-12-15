import {Component, Input} from "@angular/core";
import {RadioButtonModel} from "../models/radio-button.model";

@Component({
  selector: 'radio-button-component',
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent {
  @Input() settings: RadioButtonModel = null;

  constructor() {
  }
}
