import {NgModule} from "@angular/core";
import {DashboardPageComponent} from "./dashboard-page.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "../../modules/common/common.module";

@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    DashboardRoutingModule,
    IonicModule,
    CommonModule,
  ]
})
export class DashboardPageModule {}
