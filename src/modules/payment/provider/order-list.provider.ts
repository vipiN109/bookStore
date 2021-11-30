/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { orderListSchema } from '../schema/order-list.schema';

export const orderListProvider = [
  {
    provide: 'ORDER_LIST_MODEL',
    useFactory: (connection: Connection) =>connection.model('orderlist', orderListSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];