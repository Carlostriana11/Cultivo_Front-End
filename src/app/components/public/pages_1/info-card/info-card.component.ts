import { Component } from '@angular/core';
import { ApiResponse, Huerta } from '../../../../interface/huerta';
import { HuertaService } from '../../../../services/card-info.service';
import { ButtonCreatorCardComponent } from "../../button-creator-card/button-creator-card.component";
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  imports: [ButtonCreatorCardComponent, RouterLink, NgFor],
})
export default class InfoCardComponent{
  huertas: Huerta[] = []; // Inicializamos como un arreglo vacío

  constructor(private huertaService: HuertaService) {}

  ngOnInit(){
    this.huertaService.getInfo().subscribe( data =>{
      this.huertas = data.data
    });
  }
}
