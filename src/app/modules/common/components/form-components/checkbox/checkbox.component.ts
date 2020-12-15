import {Component, Input} from "@angular/core";
import {CheckboxInputModel} from "../models/checkbox-input.model";

@Component({
  selector: 'checkbox-component',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  @Input() settings: CheckboxInputModel = null;

  constructor() {
  }
}
