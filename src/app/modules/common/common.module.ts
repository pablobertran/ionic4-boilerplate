import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {FormComponentsModule} from "./components/form-components/form-components.module";
import {DirectivesModule} from "./directives/directives.module";

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
  ],
  imports: [
    IonicModule,
    RouterModule,
    FormComponentsModule,
    DirectivesModule,
  ]
})
export class CommonModule {}
