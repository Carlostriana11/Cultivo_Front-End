import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NevegationBarComponent } from "./components/public/nevegation-bar/nevegation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NevegationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
