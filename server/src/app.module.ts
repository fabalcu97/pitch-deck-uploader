import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PitchDeckModule } from './pitch-deck/pitch-deck.module';
import configuration, { DatabaseConfig } from 'src/core/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<DatabaseConfig['uri']>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    PitchDeckModule,
  ],
})
export class AppModule {}
