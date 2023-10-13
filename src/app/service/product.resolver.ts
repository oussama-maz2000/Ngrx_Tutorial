import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, first, map, mergeMap, of, tap } from 'rxjs';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolver implements Resolve<boolean> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.productService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) this.productService.getAll();
      }),
      first()
    );
  }
}
