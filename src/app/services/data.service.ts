import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlPath:string;
  constructor(private http: HttpClient) {
    this.urlPath = 'assets/js/user.json';
   }
  getUserInfo():any{
    return this.http.get(this.urlPath);
  } 
}
