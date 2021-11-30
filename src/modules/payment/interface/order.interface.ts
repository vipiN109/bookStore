/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface IOrder extends Document {
    partnerDetailsId: string;
    userId: string;
    orderNumber: string;
    userType: string;
    loyaltyItem: any;
    userName:  string;
    mobile:  string;
    orderType:  string;
    otp:  string;
    arrivalTime:  Date;
    expectedTime :  Date;
    numberOfPeople:number;
    businessName: string;
    orderTracking:any;
    address: string;
    instruction:string;
    productTotalPrice:  number;
    addonTotalPrice:  number;
    trackStatus: string;
    createdBy:  string;
    createdOn:Date;
    status:  string;
}

