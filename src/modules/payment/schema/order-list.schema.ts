/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const orderListSchema = new Schema({
    orderId: { type: Schema.Types.ObjectId, ref: 'order' },
    productId:  { type: Schema.Types.ObjectId, ref: 'product' },
    productName: { type: String, default: null },
    productType: { type: String, default: null },
    foodType: { type: String, default: null },
    productAddon: [
        {
            addonName: { type: String, default: null },
            addonPrice: { type: Number, default: null }, 
        }
    ],
    productTotalPrice: { type: Number, default: null },
    addonTotalPrice: { type: Number, default: null },
    discountPrice: { type: Number, default: null },
    quantity: { type: Number, default: null },
    unitPrice: { type: Number, default: null },
    createdOn: { type: Date, default: null },
    status: { type: String, enum: ['0', '1'], default: '1' }
});