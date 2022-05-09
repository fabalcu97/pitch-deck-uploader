import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadedFile } from 'src/core/types/file';
import {
  PitchDeck,
  PitchDeckDocument,
} from 'src/pitch-deck/models/pitchDeck.model';
import { CreatePitchDeck } from 'src/pitch-deck/types/CreatePitchDeck';

@Injectable()
export class PitchDeckService {
  constructor(
    @InjectModel(PitchDeck.name)
    private pitchDeckModel: Model<PitchDeckDocument>,
  ) {}

  async findById(id: string): Promise<PitchDeck> {
    return this.pitchDeckModel.findById(id);
  }

  async fileToImages(file: UploadedFile): Promise<string[]> {
    return [];
  }

  async create(pitchDeck: CreatePitchDeck) {
    return this.pitchDeckModel.create(pitchDeck);
  }
}
