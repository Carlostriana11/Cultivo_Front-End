import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoFertilizerService } from '../../../../../services/info-fertilizer.service';

@Component({
  selector: 'app-update-fertelizer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './update-fertelizer.component.html',
  styleUrl: './update-fertelizer.component.css'
})
export class UpdateFertelizerComponent {

  allUpdateFertilizer!: FormGroup
  idFertilizer!:any

  constructor(private router: Router,
    private infoFertilizerService: InfoFertilizerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.idFertilizer = data.id
    this.allUpdateFertilizer = new FormGroup({
      titulo:new FormControl("", [Validators.required]),
      image:new FormControl("", [Validators.required]),
      Description:new FormControl("", [Validators.required])
    })
  }
  ngOnInit(){
    this.infoFertilizerService.getInfoFertilizerById(this.idFertilizer).subscribe( data =>{
      const info = data.data
      console.log(info)
      this.allUpdateFertilizer.patchValue({
        titulo: info[0].titulo,
        image: info[0].image,
        Description: info[0].Description
      })
    })
  }
  updateAllFertilizer(){
    if(this.allUpdateFertilizer.valid){
      this.infoFertilizerService.fertilizerUpdate(this.idFertilizer, this.allUpdateFertilizer.value).subscribe( data =>{
        location.reload();
      })
    }
  }
}
