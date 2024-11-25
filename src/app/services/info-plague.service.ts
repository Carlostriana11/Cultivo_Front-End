import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPlagueService {

  private url: any = "http://localhost:4000/api"
  constructor(private http: HttpClient){}

  postPlague(newPlague: any){
    return  this.http.post<any>(`${this.url}/plague`,newPlague);
  }
  getInfoPlague(){
    return this.http.get<any>(`${this.url}/plague`);
  }
  getInfoPlagueById(idPlague: string){
    return this.http.get<any>(`${this.url}/plague/${idPlague}`);
  }
  updatePlagueById(idPlague: string, infoPlague: any){
    return this.http.patch<any>(`${this.url}/plague/${idPlague}`, infoPlague);
  }
  deletePlagueById(idPlague: string){
    return this.http.delete<any>(`${this.url}/plague/${idPlague}`)
  }

}
