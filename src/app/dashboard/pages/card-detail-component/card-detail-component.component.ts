import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { CardInfoService } from '../../../services/card-info.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import UpdateCardComponent from '../update-card/update-card.component';

@Component({
  selector: 'app-card-detail-component',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './card-detail-component.component.html',
  styleUrl: './card-detail-component.component.css'
})
export default class CardDetailComponentComponent {

  infoId!: string; 
  huerta!: any;
  constructor(private activeRoute: ActivatedRoute, private CardInfoService :CardInfoService, private _matDiaLog: MatDialog, private router: Router){}

  // huerta = { titulo: "Huerta Urbana", url: "https://www.fecoagro.com.ar/wp-content/uploads/2023/08/cuando-y-como-cultivar-lechugas-750x420.jpg", descripcion: "Una huerta pequeña perfecta para balcones y espacios reducidos en la ciudad. Esta huerta es ideal para quienes viven en apartamentos o casas con poco espacio exterior. Se pueden cultivar una variedad de vegetales y hierbas en macetas y contenedores.", ubicacion: "Usualmente se encuentra en balcones, terrazas y patios pequeños.", linea_de_tiempo: { clima_ideal: { condiciones: "Temperaturas moderadas entre 15°C y 25°C. Evitar temperaturas extremas para asegurar el crecimiento adecuado de las plantas.", motivo: "Las temperaturas moderadas permiten un crecimiento óptimo sin estresar las plantas." }, tiempo_de_crecimiento: { duracion: "Aproximadamente 6 a 8 semanas desde la siembra hasta la cosecha.", momento_de_cosecha: "Cuando las plantas han alcanzado un tamaño adecuado y las hojas están verdes y frondosas." }, frecuencia_de_riego: { periodicidad: "Regar dos veces por semana, asegurándose de que el suelo esté siempre húmedo pero no encharcado." } } };

  ngOnInit(){
    this.activeRoute.params
    .pipe(
      tap( Response => {
        // console.log(Response)
        return Response
      }),
      map( Response => Response['id'])
    ).subscribe(id =>{
      // console.log(id);

      this.infoId = id;

      this.CardInfoService.getInfoById( this.infoId).subscribe( (data) =>{
        // console.log(data.data)

        this.huerta = data.data

      })

    })
  }
  deleteInfo(id:string){
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
        this.CardInfoService.deleteAllInfo(id).subscribe(data => {
          // console.log(data)
        })
        // location.reload();
        this.router.navigate(['dashboard/care-guide'])
      }
    });
  }
  editAllInfo(id: string): void {
    this._matDiaLog.open(UpdateCardComponent, {
      width: "1500px",
      height: "auto",
      data: { id: id },
      panelClass: 'centered-modal'  // Añadir esta línea
    });
  }
  
  
  
  
}
