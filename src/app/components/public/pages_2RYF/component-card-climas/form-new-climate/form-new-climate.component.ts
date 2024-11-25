import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoClimateService } from '../../../../../services/info-climate.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-new-climate',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form-new-climate.component.html',
  styleUrl: './form-new-climate.component.css'
})
export default class FormNewClimateComponent {
  newInfoClimate!:FormGroup
  constructor(private infoClimateService: InfoClimateService, private router: Router){
    this.newInfoClimate = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.maxLength(300),Validators.minLength(1)]),
      descriptionLluvia: new FormControl("", Validators.required),
      descriptionCalido: new FormControl("", Validators.required),
      descriptionSeco: new FormControl("", Validators.required)
    })
  }
  postNewClimate(){
    if(this.newInfoClimate.valid){
      this.infoClimateService.createInfoClimate(this.newInfoClimate.value).subscribe( data =>{
        // console.log(data)
      })
      this.router.navigate(['dashboard/create'])

    }
  }
}
