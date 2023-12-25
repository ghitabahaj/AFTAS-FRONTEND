import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { huntingPost } from 'src/app/model/huntingPost';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private fishUrl = 'http://localhost:8080/api/v1/fishes';
  private saveHunt = 'http://localhost:8080/api/v1/hunting/addHunting';

  constructor(private http: HttpClient) { }


  getAllFishes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.fishUrl}`)
  }


  saveHunting(hunting: huntingPost): Observable<any>{
    return this.http.post<any>(this.saveHunt, hunting)
  }



}
