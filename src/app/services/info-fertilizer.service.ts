import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoFertilizerService {

  private url: any = "http://localhost:4000/api"
  constructor(private http:HttpClient) { }

  getInfoFertilizer(){
    return this.http.get<any>(`${this.url}/fertilizer`)
  }
  getInfoFertilizerById(id: string){
    return this.http.get<any>(`${this.url}/fertilizer/${id}`)
  }
  deleteFertilizer(id:string){
    return this.http.delete<any>(`${this.url}/fertilizer/${id}` )
  }
  fertilizerUpdate(id: string, newInfo:any){
    return this.http.patch<any>(`${this.url}/fertilizer/${id}`, newInfo)
  }
  postFertilizer(newFertilizer: any){
    console.log(newFertilizer)
    return this.http.post<any>(`${this.url}/fertilizer`,newFertilizer)
  }
}
