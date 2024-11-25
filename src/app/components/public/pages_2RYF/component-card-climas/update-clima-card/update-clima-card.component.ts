import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoClimateService } from '../../../../../services/info-climate.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-clima-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './update-clima-card.component.html',
  styleUrl: './update-clima-card.component.css'
})
export class UpdateClimaCardComponent {
  allUpdateClima!: FormGroup;
  idClimate!: any;

  constructor(private router: Router,
    private infoClimaService: InfoClimateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.idClimate = data.id;
    this.allUpdateClima = new FormGroup({
      title: new FormControl("", [Validators.required]),
      descriptionLluvia: new FormControl("", [Validators.required]),
      descriptionCalido: new FormControl("", [Validators.required]),
      descriptionSeco: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(){
    this.infoClimaService.getInfoClimaById(this.idClimate).subscribe(data =>{
      const info = data.data
      this.allUpdateClima.patchValue({
        title: info[0].title,
        descriptionLluvia: info[0].descriptionLluvia,
        descriptionCalido: info[0].descriptionCalido,
        descriptionSeco: info[0].descriptionSeco
      })
    })
  }

  updateAllInfoClima(){
    if(this.allUpdateClima.valid){
      this.infoClimaService.updateAllInfo(this.idClimate, this.allUpdateClima.value).subscribe(data =>{
        location.reload();
      })
    }
  }
}
