import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<void>(`${environment.SERVER_PORT}/api/Products`, product, { headers })
  }
}
