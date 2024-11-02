import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-button-creator-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-creator-card.component.html',
  styleUrl: './button-creator-card.component.css'
})
export class ButtonCreatorCardComponent {
}
