import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Injectable } from '@angular/core';
import { Product } from '../model/classes/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementFactory);
  }
}
