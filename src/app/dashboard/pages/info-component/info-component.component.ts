import { Component } from '@angular/core';
import { CardPlagueComponent } from "../../../components/public/pages_3plague/card-plague/card-plague.component";

@Component({
  selector: 'app-info-component',
  standalone: true,
  imports: [CardPlagueComponent],
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})
export default class InfoComponentComponent {

}
