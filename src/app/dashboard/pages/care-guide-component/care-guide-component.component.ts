import { Component } from '@angular/core';
import { InfoCardComponent } from "../../../components/public/info-card/info-card.component";
import { ButtonCreatorCardComponent } from "../../../components/public/button-creator-card/button-creator-card.component";

@Component({
  selector: 'app-care-guide-component',
  standalone: true,
  imports: [InfoCardComponent, ButtonCreatorCardComponent],
  templateUrl: './care-guide-component.component.html',
  styleUrl: './care-guide-component.component.css'
})
export default class CareGuideComponentComponent {



  
}
