import { Module } from '@nestjs/common';
import { PitchDeckService } from './pitch-deck.service';
import { PitchDeckController } from './pitch-deck.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PitchDeck,
  PitchDeckSchema,
} from 'src/pitch-deck/models/pitchDeck.model';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PitchDeck.name, schema: PitchDeckSchema },
    ]),
  ],
  controllers: [PitchDeckController],
  providers: [PitchDeckService, ConfigService],
})
export class PitchDeckModule {}
