/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [PaymentModule],
})
export class ModulesModule {}
