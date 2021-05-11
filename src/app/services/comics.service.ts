import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comics } from 'src/model/comics.model';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  baseURL = 'http://gateway.marvel.com/v1/public/comics?ts=1620612352&apikey=fd3523292d2c53004a7c9c05d91c082c&hash=2628eeb38df0d333fd94f3f1b8c4a768'

  constructor(private http: HttpClient) { }

  getCommics(): Observable<any> {
    return this.http.get<Comics[]>(this.baseURL)
  }
}
