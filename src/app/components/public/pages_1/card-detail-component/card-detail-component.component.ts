import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import UpdateCardComponent from '../update-card/update-card.component';
import { HuertaService } from '../../../../services/card-info.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-card-detail-component',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './card-detail-component.component.html',
  styleUrls: ['./card-detail-component.component.css'], // Corregí el nombre de la propiedad a 'styleUrls'
})
export default class CardDetailComponentComponent {
  infoId!: string;
  huerta!: any; // Ahora se tipa correctamente como 'Huerta' o 'null'

  constructor(
    private activeRoute: ActivatedRoute,
    private huertaService: HuertaService, // Ajusté el nombre del servicio
    private matDialog: MatDialog,
    private router: Router
  ) {}


  ngOnInit(){
    this.activeRoute.params
    .pipe(
      tap( Response =>{
        return Response
      }),
      map( Response => Response['id'])
    ).subscribe(id =>{

      this.infoId = id; // este es el id que viene de la tarjeta de la plaga

      this.huertaService.getInfoById(this.infoId).subscribe(data =>{
        // console.log(data.data)
        this.huerta = data.data

      })
    })
  }

  deleteInfo(id: string):void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.huertaService.deleteAllInfo(id).subscribe(
          () => {
            Swal.fire('¡Eliminado!', 'La información ha sido eliminada.', 'success');
            this.router.navigate(['dashboard/care-guide']);
          },
          (error) => {
            console.error('Error al eliminar la información:', error);
            Swal.fire('Error', 'No se pudo eliminar la información.', 'error');
          }
        );
      }
    });
  }

  editAllInfo(id: string):void {
    this.matDialog.open(UpdateCardComponent, {
      width: '800px',
      height: 'auto',
      data: {id: id },
      panelClass: 'centered-modal',
    });
  }
}
