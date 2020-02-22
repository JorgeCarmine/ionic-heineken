import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class StorageFavorites {

  constructor() { }

	getFavorites(): Product[] {
		let products = [];
		if (localStorage.getItem('gestyd')) {
			products = JSON.parse(localStorage.getItem('gestyd'));
		}
		return products;
	}

	setFavorites(product: Product[]): void {
		localStorage.setItem('gestyd', JSON.stringify(product));
	}

	deleteFavorites(): void {
		localStorage.removeItem('gestyd');
	}

}