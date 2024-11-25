import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoPlagueService } from '../../../../services/info-plague.service';
import { ButtonCreatorPlagueComponent } from "../button-creator-plague/button-creator-plague.component";

@Component({
  selector: 'app-card-plague',
  standalone: true,
  imports: [NgFor, RouterLink, ButtonCreatorPlagueComponent],
  templateUrl: './card-plague.component.html',
  styleUrl: './card-plague.component.css'
})
export class CardPlagueComponent {

  plagues!: any
  constructor(private InfoPlagueServices: InfoPlagueService){}

  ngOnInit(){
    this.InfoPlagueServices.getInfoPlague().subscribe( data => {
      
      this.plagues = data.data
    })
  }
}
