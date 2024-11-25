import { Component } from '@angular/core';
import { InfoPlagueService } from '../../../../services/info-plague.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePlagueComponent } from '../update-plague/update-plague.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plague-detail',
  standalone: true,
  imports: [],
  templateUrl: './plague-detail.component.html',
  styleUrl: './plague-detail.component.css'
})
export default class PlagueDetailComponent {
  idPlague!: string;
  plague!: any;
  constructor(
    private infoPlagueServices: InfoPlagueService,
    private activeRoute: ActivatedRoute,
    private _matDialog: MatDialog,
    private router: Router
  ){}

  ngOnInit(){
    this.activeRoute.params
    .pipe(
      tap( Response =>{
        return Response
      }),
      map( Response => Response['id'])
    ).subscribe(id =>{

      this.idPlague = id; // este es el id que viene de la tarjeta de la plaga
      this.infoPlagueServices.getInfoPlagueById( this.idPlague).subscribe( data => {

        this.plague = data.data
      })
    })
  }

  deleteInfoPlague(idPlague: string){
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
        this.infoPlagueServices.deletePlagueById(idPlague).subscribe( data =>{
          console.log(data)
        })
        this.router.navigate(['dashboard/info'])
      }
    });
  }
  editAllInfoPlague(idPlague: string): void{
    this._matDialog.open(UpdatePlagueComponent, {
      width:" 1500px",
      height: "auto",
      data: {id: idPlague},
      panelClass: 'centered-modal'
    })
  }
}
