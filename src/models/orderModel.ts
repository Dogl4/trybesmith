import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder, IOrderModel } from '../interfaces';

const linkProductOrder = async (order: IOrder) => {
  const { orderId, products } = order;

  await Promise.all(products.map(async (idProduct) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await connection.execute<ResultSetHeader>(query, [orderId, idProduct]);
  }));
};

const resgisterProductOrder = async (order: IOrder) => {
  const { id: userId, products } = order as IOrderModel;

  // Insere a ordem ao banco
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId: orderId }] = await connection.execute<ResultSetHeader>(query, [userId]);

  // Vincula a ordem ao um único produto
  await linkProductOrder({ products, orderId });
};

export default { resgisterProductOrder };
