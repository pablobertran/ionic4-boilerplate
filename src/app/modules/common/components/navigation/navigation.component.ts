import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  selectedIndex: number = 0;
  @Input('navigationElements') appPages: any[] = [];
  @Input() labels: string[] = [];

  constructor() {
  }
}
