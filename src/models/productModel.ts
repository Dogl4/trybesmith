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

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute<ResultSetHeader>(query);
  return products;
};

export default { createProduct, getAllProducts };
