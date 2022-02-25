import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder, IOrderModel, IOrderGet } from '../interfaces';

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

const getOrderById = async (orderGet: IOrderGet) => {
  const { id: orderId } = orderGet;

  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
  const [row] = await connection.execute<ResultSetHeader>(query, [orderId]);
  return row;
};

const getAllOrders = async () => {
  const query = `SELECT 
      Trybesmith.Orders.id, userId, Trybesmith.Products.id as productsId 
  FROM 
      Trybesmith.Orders 
  INNER JOIN 
      Trybesmith.Products 
  ON 
      Trybesmith.Orders.id = Trybesmith.Products.orderId;`;
  const [rows] = await connection.execute<ResultSetHeader>(query);
  console.log('ModelOrder', rows);
};

export default { resgisterProductOrder, getOrderById, getAllOrders };
