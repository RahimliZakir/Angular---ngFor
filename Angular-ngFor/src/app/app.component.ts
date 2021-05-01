import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-ngFor';

  numberLis: Array<string> = ["First", "Second", "Third", "Fourth", "Fifth"];
}
