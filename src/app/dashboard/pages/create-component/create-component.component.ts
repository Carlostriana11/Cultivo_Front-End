import { Component } from '@angular/core';
import { InfoClimateCardComponent } from "../../../components/public/pages_2RYF/component-card-climas/info-climate-card/info-climate-card.component";
import { InfoCardFertilizerComponent } from "../../../components/public/pages_2RYF/component-card-fertilizer/info-card-fertilizer/info-card-fertilizer.component";

@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [InfoClimateCardComponent, InfoCardFertilizerComponent],
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export  default class CreateComponentComponent {

}
