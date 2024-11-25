import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoFertilizerService } from '../../../../../services/info-fertilizer.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-new-fertilizer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-new-fertilizer.component.html',
  styleUrl: './form-new-fertilizer.component.css'
})
export default class FormNewFertilizerComponent {


  postAllFertilizer!: FormGroup

  constructor(private infoFertilizerServices: InfoFertilizerService, private router:Router){
    
    this.postAllFertilizer = new FormGroup({
      titulo:new FormControl("", [Validators.required]),
      image:new FormControl("", [Validators.required]),
      Description:new FormControl("", [Validators.required])
    })
  }

  postNewFertilizer(){
    if(this.postAllFertilizer.valid){
      this.infoFertilizerServices.postFertilizer(this.postAllFertilizer.value).subscribe(data =>{
        console.log(data)
      })
      this.router.navigate(['dashboard/create'])

    }
  }
}
