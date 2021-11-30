/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    partnerDetailsId: { type: Schema.Types.ObjectId, ref: 'partnerdetails ' },
    orderNumber: { type: String, default: null },
    userType: { type: String, default: null },
    otp: { type: String, default: null },
    userName: { type: String, default: null },
    mobile: { type: String, default: null },
    orderType: { type: String, default: null },
    arrivalTime: { type: Date, default: null },
    expectedTime: { type: Date, default: null },
    numberOfPeople: { type: Number, default: null },
    businessName: { type: String, default: null },
    instruction: { type: String, default: null },
    address: { type: String, default: null },
    orderTracking: [
        {
            trackStatus : { type: String, default: null },
            trackOn : { type: Date, default: null },
        }
    ],
    trackStatus: { type: String, default: null },
    productTotalPrice: { type: Number, default: null },
    addonTotalPrice: { type: Number, default: null },
    createdBy: { type: String, default: null },
    createdOn: { type: Date, default: null },
    status: { type: String, enum: ['0', '1'], default: '1' }
});

