/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OrderDto {
    //
    @IsNotEmpty()
    partnerDetailsId: string;

    //
    @IsNotEmpty()
    userId: string;

    //
    @IsNotEmpty()
    userType: string;

    //
    @IsNotEmpty()
    userName: string;

    //
    @IsNotEmpty()
    orderType: string;

    //
    @IsNotEmpty()
    time: number;

    //
    @IsNotEmpty()
    numberOfPeople: number;

    //
    @IsNotEmpty()
    businessName: string;

    //
    @IsNotEmpty()
    address: string;

    //
    instruction: string;

    //
    @IsNotEmpty()
    productTotalPrice: number;


    //
    @IsNotEmpty()
    orderList: any;

    trackStatus: string;

    //
    @IsNotEmpty()
    createdBy: string;
    createdOn: Date;
    orderId: string;
    orderNumber: string;
    otp: string;
    orderTracking: any;
    arrivalTime: Date;
}

// partnerDetailsId: string;
// userId: string;
// userType: string;
// loyaltyItem: any;
// userName:  string;
// mobile:  string;
// orderType:  string;
// arrivalTime:  Date;
// numberOfPeople:number;
// businessName: string;
// address: string;
// productTotalPrice:  number;
// addonTotalPrice:  number;
// createdBy:  string;
// createdOn:Date;
// status:  string;