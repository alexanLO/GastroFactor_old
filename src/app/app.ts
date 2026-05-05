import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreen } from "./pages/main-screen/main-screen";
import { FooterComponent } from "./component/footer-component/footer-component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [MainScreen, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('GastroFactor');
}
