import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
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
  private pageUrl ='http://localhost:8080/api/v1/competitions/paged';

  constructor(private http: HttpClient) { }

  getAllCompetitions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`)
      
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

  getAllPageCompetitions(page: number, size: number): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(`${this.pageUrl}`, { params });
  }
}
