import { Component } from '@angular/core';
import { InfoClimateService } from '../../../../../services/info-climate.service';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UpdateClimaCardComponent } from '../update-clima-card/update-clima-card.component';
import { ButtonCreatorInfoClimaComponent } from "../button-creator-info-clima/button-creator-info-clima.component";

@Component({
  selector: 'app-info-climate-card',
  standalone: true,
  imports: [NgFor, ButtonCreatorInfoClimaComponent],
  templateUrl: './info-climate-card.component.html',
  styleUrl: './info-climate-card.component.css'
})
export class InfoClimateCardComponent {
  climas!: any;
  constructor(private infoClimaService:InfoClimateService, private _matDiaLog: MatDialog){}
  ngOnInit(){
    this.infoClimaService.getInfoClimate().subscribe( data => {
      console.log(data.data)

      this.climas = data. data
    })
  }
  deleteClima(id: string){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoClimaService.deleteAllInfo(id).subscribe(data => {
          console.log(data)
        })
        location.reload();
      }
    });
  }
  updateClima(id: string){
    this._matDiaLog.open(UpdateClimaCardComponent,{
      width:"1200px",
      data: {id: id}
    })
  }
}

