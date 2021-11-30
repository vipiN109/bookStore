/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from './configration/configuration.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    ConfigurationService
  ],
  exports: [
    ConfigurationService
  ]
})
export class SharedModule {}