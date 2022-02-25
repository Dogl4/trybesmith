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

const produtosByOrder = async (id: number | undefined) => {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [product] = await connection.execute(query, [id]);
  return product as [] | IProduct;
};

export default { createProduct, getAllProducts, produtosByOrder };
