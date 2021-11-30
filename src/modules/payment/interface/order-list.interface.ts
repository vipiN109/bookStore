/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface IOrderlist extends Document {
    orderId: string;
    productId: string;
    productName: string;
    productType: string;
    foodType:string;
    productAddon: any; 
    productTotalPrice: number;
    unitPrice: number;
    addonTotalPrice: number;
    discountPrice: number;
    discountPercent: number;
    quantity: number;
    createdOn: Date;
    status: string;
}

