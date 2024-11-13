import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardInfoService } from '../../../services/card-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-card-creator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-card-creator.component.html',
  styleUrl: './new-card-creator.component.css'
})
export default class NewCardCreatorComponent {


  newCard!: FormGroup

  constructor(private cardInforServices: CardInfoService, private router:  Router){
    this.newCard =  new FormGroup({
      titulo: new FormControl("", Validators.required), 
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

  registerForm(){
    if(this.newCard.valid){
      console.log('datos de formulario', this.newCard.value)

      this.cardInforServices.createInfoCard(this.newCard.value).subscribe(data =>{
        console.log(data)
      })
      this.router.navigate(['dashboard/care-guide'])
      
    }
  }
  

}
