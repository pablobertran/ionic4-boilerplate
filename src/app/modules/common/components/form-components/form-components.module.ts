import {NgModule} from "@angular/core";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ComboboxComponent} from "./combobox/combobox.component";
import {InputFieldComponent} from "./input-field/input-field.component";
import {RadioButtonComponent} from "./radio-button/radio-button.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    CheckboxComponent,
    ComboboxComponent,
    InputFieldComponent,
    RadioButtonComponent,
  ]
})
export class FormComponentsModule {}
