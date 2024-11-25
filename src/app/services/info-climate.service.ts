import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoClimateService {

  private url:any = "http://localhost:4000/api"

  constructor(private http:HttpClient) { }
    createInfoClimate(newInfo: any){
      return this.http.post<any>(`${this.url}/climateinfo`, newInfo)
    }
    getInfoClimaById(id:string){
      return this.http.get<any>(`${this.url}/climateinfo/${id}`)

    }
    getInfoClimate(){
      return this.http.get<any>(`${this.url}/climateinfo`)
    }
    updateAllInfo(id: string, updateinfo:any){
      return this.http.patch<any>(`${this.url}/climateinfo/${id}`,updateinfo)

    }
    deleteAllInfo(id: string){
      return this.http.delete<any>(`${this.url}/climateinfo/${id}`)

    }
}
