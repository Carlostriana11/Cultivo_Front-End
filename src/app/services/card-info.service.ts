import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  private url:any = "http://localhost:4000/api"

  constructor(private http:HttpClient) { }

  createInfoCard(newInfo:any){
    return this.http.post<any>(`${this.url}/info`, newInfo)
  }
  getInfo(){
    return this.http.get<any>(`${this.url}/info`)
  }
  getInfoById(id: string){
    return this.http.get<any>(`${this.url}/info/${id}`)
  }
  deleteAllInfo(id: string){
    return this.http.delete<any>(`${this.url}/info/${id}`)
  }
  updateInfo(id:string, newInfo:any){
    console.log(newInfo)
    return this.http.patch<any>(`${this.url}/info/${id}`,newInfo)
  }


}
