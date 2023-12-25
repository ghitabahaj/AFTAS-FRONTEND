import { HttpClient, HttpErrorResponse ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RankingPost } from 'src/app/model/ranking-post';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private apiUrl = 'http://localhost:8080/api/v1/members/';
  private registerUrl = 'http://localhost:8080/api/v1/rankings/register';
  

  constructor(private http: HttpClient) { }


  getAllMembers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  registerMember(ranking: RankingPost): Observable<any>{
    return this.http.post<any>(this.registerUrl, ranking)
  }
  searchMember(keyWord: string) : Observable<any[]>{
    let urlSerach="http://localhost:8080/api/v1/members/search/"+keyWord;
    return this.http.get<any[]>(urlSerach);
  }
}
