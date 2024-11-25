import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HuertaService } from '../../../../services/card-info.service';

@Component({
  selector: 'app-new-card-creator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-card-creator.component.html',
  styleUrls: ['./new-card-creator.component.css'], // Corregí el nombre de la propiedad a 'styleUrls'
})
export default class NewCardCreatorComponent {
  newCard: FormGroup;

  constructor(private huertaService: HuertaService, private router: Router) {
    this.newCard = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      image: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      ubicacion: new FormControl('', Validators.required),
      climaIdeal: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      timepoDeCrecimiento: new FormControl('', Validators.required),
      momentoDecosecha: new FormControl('', Validators.required),
      frecuenciaDeRiego: new FormControl('', Validators.required),
    });
  }

  registerForm() {
    if (this.newCard.valid) {
      this.huertaService.createInfoCard(this.newCard.value).subscribe(data =>{
        console.log(data)
        setTimeout(() => {
          this.router.navigate(['dashboard/care-guide']);
        }, 3000); 
      })
    }
  }
}
