/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { orderSchema } from '../schema/order.schema';

export const orderProvider = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) =>connection.model('order', orderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];