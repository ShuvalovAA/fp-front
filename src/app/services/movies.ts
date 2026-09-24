import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com';
  private apiKey = '339d62c8';

  constructor(private http:HttpClient){};

  searchMovies(title:string): Observable<any>{
    var request_str: string = `${this.apiUrl}?apikey=${this.apiKey}&s=${title}`;
    return this.http.get<any>(request_str);
  }
}
