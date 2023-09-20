import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) { }

  start(player: string) {
    return this.http.post(`${this.baseUrl}/choice`, player);
  }

  result(): Observable<any> {
    return this.http.get(`${this.baseUrl}/result`);
  }
}
