import {Component, Input} from "@angular/core";
import {ComboboxModel} from "../models/combobox.model";

@Component({
  selector: 'combobox-component',
  templateUrl: './combobox.component.html'
})
export class ComboboxComponent {
  @Input() settings: ComboboxModel = null;

  constructor() {
  }
}
