import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  apiURL ='https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.apiURL}/products`).pipe(
      catchError(err => {
        console.error('API error:', err);
        return throwError(() => new Error('Unable to load products'))
      })
    )
  }
}

