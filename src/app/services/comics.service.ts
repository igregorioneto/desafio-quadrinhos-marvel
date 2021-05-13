import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comics } from 'src/model/comics.model';


import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  baseURL = 'http://gateway.marvel.com/v1/public/comics'
  hash = '?ts=1620612352&apikey=fd3523292d2c53004a7c9c05d91c082c&hash=2628eeb38df0d333fd94f3f1b8c4a768' 
  
  baseURLDbFake = 'http://localhost:3000/purchase'

  constructor(private http: HttpClient, 
    private snackBar: MatSnackBar ) { }

  getCommics(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}${this.hash}`)
  }

  getComic(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}${this.hash}`)
  }

  showMsg(msg: string, isError: boolean = false) : void {
    this.snackBar.open(msg, "X", {
      duration: 10000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  postComicDbFake(dados: any): Observable<any> {
    return this.http.post<any>(`${this.baseURLDbFake}`,dados)
  }

  getComicDbFake(): Observable<any> {
    return this.http.get<any>(`${this.baseURLDbFake}`)
  }

  getComicDbFakeId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURLDbFake}/${id}`)
  }
}
