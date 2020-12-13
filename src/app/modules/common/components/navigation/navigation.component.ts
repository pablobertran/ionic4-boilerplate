import {Component} from "@angular/core";

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  selectedIndex: number = 0;
  appPages: any[] = [];
  labels: string[] = [];
}
