import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonCreatorCardComponent } from "../button-creator-card/button-creator-card.component";
import { CardInfoService } from '../../../services/card-info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgFor, ButtonCreatorCardComponent, RouterLink],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {

  huertas!: any;
  constructor(private cardIndo: CardInfoService){}

  ngOnInit(){
    this.cardIndo.getInfo().subscribe( (data) => {
      console.log(data.data)

      this.huertas = data.data
    })
  }

}
