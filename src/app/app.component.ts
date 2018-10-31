import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  itemApp = 'Maça';

  constructor() {
    setTimeout(() => {
      this.itemApp = 'Banana';
    }, 2000);
  }
}
