import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreen } from "./component/main-screen/main-screen";

@Component({
  selector: 'app-root',
  imports: [MainScreen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GastroFactor');
}
