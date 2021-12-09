import { Product } from "../interfaces/interfaces";

const product1 = {
  id: '1',
  name: 'Coffee Mug',
}

const product2 = {
  id: '2',
  name: 'Coffee Mug 2',
  img: './coffee-mug2.png',
};

export const products: Product[] = [product1, product2];