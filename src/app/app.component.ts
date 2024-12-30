import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Cambia el selector si es necesario
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent {
  title = 'store';
}
