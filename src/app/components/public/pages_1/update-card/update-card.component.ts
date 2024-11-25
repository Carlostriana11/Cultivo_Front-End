import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HuertaService } from '../../../../services/card-info.service';

@Component({
  selector: 'app-update-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css'], // Corregí el nombre de la propiedad a 'styleUrls'
})
export default class UpdateCardComponent implements OnInit {
  infoId!: string;
  allUpdateInfo!: FormGroup;

  constructor(
    private huertaService: HuertaService, // Ajusté el nombre del servicio
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any // Tipé correctamente el objeto recibido
  ) {
    this.infoId = data.id;
    this.allUpdateInfo = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      ubicacion: new FormControl('', Validators.required),
      climaIdeal: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      timepoDeCrecimiento: new FormControl('', Validators.required), // Corregido
      momentoDecosecha: new FormControl('', Validators.required), // Corregido
      frecuenciaDeRiego: new FormControl('', Validators.required)
    })
    
  }

  ngOnInit(): void {
    this.huertaService.getInfoById(this.infoId).subscribe( data => {
      const info = data.data // Usamos el primer elemento del arreglo
      this.allUpdateInfo.patchValue({
        titulo: info[0].titulo,
        image: info[0].image,
        description: info[0].description,
        ubicacion: info[0].ubicacion,
        climaIdeal: info[0].climaIdeal,
        motivo: info[0].motivo,
        timepoDeCrecimiento: info[0].timepoDeCrecimiento, // Corregido
        momentoDecosecha: info[0].momentoDecosecha, // Corregido
        frecuenciaDeRiego: info[0].frecuenciaDeRiego,
      });
      });
  }

  updateAllInfo() {
    if (this.allUpdateInfo.valid) {
      this.huertaService.updateInfo(this.infoId, this.allUpdateInfo.value).subscribe(data =>{
        location.reload();
      });
    }
  }
}
