import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class CommonModule {}
