import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { HttpClient } from '@angular/common/http';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Observable, map, of } from 'rxjs';
import { Product } from '../model/classes/Product';

@Injectable()
export class ProductDataService extends DefaultDataService<Product> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Product', http, httpUrlGenerator);
  }

  override getAll(): Observable<Product[]> {
    return this.http.get('http://localhost:3000/products').pipe(
      map((data) => {
        const pds: Product[] = [];
        for (let key in data) {
          pds.push({ ...data[key], id: key });
        }

        return pds;
      })
    );
  }
}
