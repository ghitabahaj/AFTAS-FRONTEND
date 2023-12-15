import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CompetitionService {
  private apiUrl = 'http://localhost:8080/api/v1/competitions/';
  private addUrl = 'http://localhost:8080/api/v1/competitions/add';
  private availableUrl = 'http://localhost:8080/api/v1/competitions/available';
  private todayUrl = 'http://localhost:8080/api/v1/competitions/today';

  constructor(private http: HttpClient) { }

  getAllCompetitions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
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

  getAvailableCompetitions(): Observable<any[]>{
    return this.http.get<any[]>(`${this.availableUrl}`);
  }


  addCompetition(competition: any): Observable<any> {
    return this.http.post<any>(`${this.addUrl}`, competition);
  }

  getCompetitionOftheDay(): Observable<any> {
    return this.http.get<any[]>(`${this.todayUrl}`);
  }
}
