import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoPlagueService } from '../../../../services/info-plague.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-plague',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-plague.component.html',
  styleUrl: './update-plague.component.css'
})
export class UpdatePlagueComponent {
  plague!: any;
  idPlague!:string;
  allUpdateInfo!: FormGroup;

  constructor(
    private infoplagueService: InfoPlagueService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.idPlague = data.id;
    this.allUpdateInfo = new FormGroup({
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

  ngOnInit(){
    this.infoplagueService.getInfoPlagueById(this.idPlague).subscribe( data =>{
      const info = data.data
      this.allUpdateInfo.patchValue({
        titulo: info[0].titulo,
        image: info[0].image,
        description: info[0].description,
        ubicacion: info[0].ubicacion,
        climaDondeSeUbica: info[0].climaDondeSeUbica,
        comoContrarrestarConsejo1: info[0].comoContrarrestarConsejo1,
        comoContrarrestarConsejo2: info[0].comoContrarrestarConsejo2,
        comoContrarrestarConsejo3: info[0].comoContrarrestarConsejo3
      })
    })
  }

  updateAllInfo(){
    if(this.allUpdateInfo.valid){
      this.infoplagueService.updatePlagueById(this.idPlague, this.allUpdateInfo.value).subscribe( data =>{

        location.reload();
      })
    }
  }
}
