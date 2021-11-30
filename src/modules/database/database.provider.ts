/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Configuration } from 'src/shared/configration/configuration.enum';
import { ConfigurationService } from 'src/shared/configration/configuration.service';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: ( _config: ConfigurationService,): Promise<typeof mongoose> =>
      mongoose.connect(
        _config.get(Configuration.MONGO_URL),
      ),inject: [ConfigurationService]
  },
  
];

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async (
//       _config: ConfigurationService,
//     ): Promise<typeof mongoose> =>
//       await mongoose.connect(_config.get(Configuration.MONGO_URL), {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//       }),
//     inject: [ConfigurationService],
//   },
// ];
