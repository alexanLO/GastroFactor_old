import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreen } from "./pages/main-screen/main-screen";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [MainScreen],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('GastroFactor');
}
