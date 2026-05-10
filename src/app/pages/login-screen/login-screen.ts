import { Component } from '@angular/core';
import { NavbarAlternative } from "../../component/navbar-alternative/navbar-alternative";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-login-screen',
  imports: [NavbarAlternative, Footer],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss',
})
export class LoginScreen {

  hide = true;
}
