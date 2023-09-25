import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:9000/api/games';

  constructor(private http: HttpClient) { }

  start(player: string) {
    return this.http.post(`${this.baseUrl}/choice`, player);
  }
  
  resetScore(score: Score) {
    return this.http.post(`${this.baseUrl}/reset`, score);
  }

  result(): Observable<any> {
    return this.http.get(`${this.baseUrl}/result`);
  }

  scoring(): Observable<any> {
    return this.http.get(`${this.baseUrl}/score`);
  }
}
