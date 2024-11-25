import { Component } from '@angular/core';
import { InfoFertilizerService } from '../../../../../services/info-fertilizer.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFertelizerComponent } from '../update-fertelizer/update-fertelizer.component';
import { ButtonCreatorInfoFertilizerComponent } from "../button-creator-info-fertilizer/button-creator-info-fertilizer.component";

@Component({
  selector: 'app-info-card-fertilizer',
  standalone: true,
  imports: [NgFor, RouterLink, ButtonCreatorInfoFertilizerComponent],
  templateUrl: './info-card-fertilizer.component.html',
  styleUrl: './info-card-fertilizer.component.css'
})
export class InfoCardFertilizerComponent {

  fertilizers!: any;
  constructor(private infoFertilizer: InfoFertilizerService, private _matDiaLog: MatDialog){}

  ngOnInit(){
    this.infoFertilizer.getInfoFertilizer().subscribe( data =>{
      console.log(data.data)

      this.fertilizers = data.data
    })
  }
  deleteFedrtilizer(id:string){
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
        this.infoFertilizer.deleteFertilizer(id).subscribe(data => {
          console.log(data)
        })
        location.reload();
      }
    });
  }
  updateFertelizer(id:string){
    this._matDiaLog.open(UpdateFertelizerComponent,{
      width:"1200px",
      data: {id: id}
    })
  }
}
