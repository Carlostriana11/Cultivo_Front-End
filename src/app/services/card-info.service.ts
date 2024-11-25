import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Huerta } from '../interface/huerta';

@Injectable({
  providedIn: 'root',
})
export class HuertaService {
  private url = "http://localhost:4000/api"; // Cambia esta URL por la correcta.

  constructor(private http: HttpClient) {}

  createInfoCard(newInfo: any){
    return this.http.post<any>(`${this.url}/info`, newInfo);
  }

  getInfo(){
    return this.http.get<any>(`${this.url}/info`)
  }

  getInfoById(id: string) {
    return this.http.get<any>(`${this.url}/info/${id}`)
  }

  deleteAllInfo(id: string) {
    return this.http.delete<any>(`${this.url}/info/${id}`)
  }

  updateInfo(id: string, newInfo: any) {
    return this.http.patch<any>(`${this.url}/info/${id}`, newInfo)
  }
}
