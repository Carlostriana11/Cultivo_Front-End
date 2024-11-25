import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoPlagueService } from '../../../../services/info-plague.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-new-plague',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-new-plague.component.html',
  styleUrl: './form-new-plague.component.css'
})
export default class FormNewPlagueComponent {

  postNewInfo!: FormGroup;
  constructor(private infoPlagueService: InfoPlagueService, private router: Router){
    this.postNewInfo = new FormGroup({
      titulo: new FormControl("", [Validators.required, Validators.maxLength(50)]), 
      image: new FormControl("", Validators.required), 
      description: new FormControl("", Validators.required), 
      ubicacion: new FormControl("", Validators.required), 
      climaDondeSeUbica: new FormControl("", Validators.required), 
      comoContrarrestarConsejo1: new FormControl("", Validators.required), 
      comoContrarrestarConsejo2: new FormControl("", Validators.required), 
      comoContrarrestarConsejo3: new FormControl("", Validators.required)
    }) 
  }
  postInfo(){
    if(this.postNewInfo.valid){
      this.infoPlagueService.postPlague(this.postNewInfo.value).subscribe(data =>{

        this.router.navigate(['dashboard/info'])

      })
    }
  }
}
