import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import type { INewProduct, IProduct } from '../interfaces';

const createProduct = async (product: IProduct) => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId: id }] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);

  const newProduct = { item: { id, ...product } } as INewProduct;
  return newProduct;
};

export default { createProduct };
