import { Component, Inject } from '@angular/core';
import { CardInfoService } from '../../../services/card-info.service';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
// import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './update-card.component.html',
  styleUrl: './update-card.component.css'
})
export  default class UpdateCardComponent {
  infoId!:string;
  allUpdateInfo!: FormGroup;
  constructor(
    private cardInfoService1: CardInfoService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.infoId = data.id;
    this.allUpdateInfo = new FormGroup({
      titulo: new FormControl("", [Validators.required, Validators.maxLength(50)]), 
      image: new FormControl("", Validators.required), 
      description: new FormControl("", Validators.required), 
      ubicacion: new FormControl("", Validators.required), 
      climaIdeal: new FormControl("", Validators.required), 
      motivo: new FormControl("", Validators.required), 
      timepoDeCrecimiento: new FormControl("", Validators.required), 
      momentoDecosecha: new FormControl("", Validators.required), 
      frecuenciaDeRiego: new FormControl("", Validators.required)
    })
  }
  ngOnInit(){
    this.cardInfoService1.getInfoById(this.infoId).subscribe(data =>{
    const info = data.data
    this.allUpdateInfo.patchValue({
      titulo: info[0].titulo,
      image: info[0].image,
      description: info[0].description,
      ubicacion: info[0].ubicacion,
      climaIdeal: info[0].climaIdeal,
      motivo: info[0].motivo,
      timepoDeCrecimiento: info[0].timepoDeCrecimiento,
      momentoDecosecha: info[0].momentoDecosecha,
      frecuenciaDeRiego: info[0].frecuenciaDeRiego
    })
    })
  }
  updateAllInfo(){
    if(this.allUpdateInfo.valid){
      this.cardInfoService1.updateInfo(this.infoId, this.allUpdateInfo.value).subscribe( data =>{
        console.log(this.infoId)
        console.log(this.allUpdateInfo)
        location.reload();
      })
    }
  }
}
