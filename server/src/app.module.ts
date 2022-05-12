import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { PitchDeckModule } from './pitch-deck/pitch-deck.module';
import configuration, { DatabaseConfig } from 'src/core/config/configuration';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', load: [configuration] }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => [
        {
          serveRoot: join(__dirname, '..', configService.get('mediaPath')),
          serveStaticOptions: {
            index: false,
          },
        },
      ],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<DatabaseConfig['uri']>('database.uri'),
        };
      },
      inject: [ConfigService],
    }),
    PitchDeckModule,
  ],
})
export class AppModule {}
