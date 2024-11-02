import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-card-creator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-card-creator.component.html',
  styleUrl: './new-card-creator.component.css'
})
export default class NewCardCreatorComponent {


  newCard!: FormGroup

  constructor(){
    this.newCard =  new FormGroup({
      imagen: new FormControl("", Validators.required),
      titulo: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      cuidado1: new FormControl("", Validators.required),
      cuidado2: new FormControl("", Validators.required),
      cuidado3: new FormControl("", Validators.required),
      cuidado4: new FormControl("", Validators.required),
      cuidado5: new FormControl("", Validators.required),
      cuidado6: new FormControl("", Validators.required),
    })
  }

}
