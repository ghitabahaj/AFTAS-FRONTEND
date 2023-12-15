import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private fishUrl = 'http://localhost:8080/api/v1/fishes';

  constructor(private http: HttpClient) { }


  getAllFishes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.fishUrl}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {

          console.error('Error:', error.error);
          return throwError(error.error);
        } else {
        
          console.error('An unexpected error occurred:', error);
          return throwError(error.error);
        }})
        );
  }


}
