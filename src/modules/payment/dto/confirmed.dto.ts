/* eslint-disable prettier/prettier */
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, MinLength, IsNotEmpty, minLength } from 'class-validator';

export class ConfirmedOrders {

  //
  type: string;

  //
  @IsNotEmpty()
  partnerDetailsId: string;

  //
  @IsNotEmpty()
  pageNumber: number;

  //
  @IsNotEmpty()
  pageSize: number;

}
