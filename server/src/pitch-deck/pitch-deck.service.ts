import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadedFile } from 'src/core/types/file';
import { getFileToImageConverter } from 'src/core/utils/fileToImagesConverter/builder';
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
    private configService: ConfigService,
  ) {}

  async findById(id: string): Promise<PitchDeck> {
    return this.pitchDeckModel.findById(id);
  }

  async generateImages(
    pitchDeck: PitchDeckDocument,
    file: UploadedFile,
  ): Promise<PitchDeck> {
    const fileConverter = getFileToImageConverter(file, this.configService);
    const imagesPaths = await fileConverter.getImages(pitchDeck.id.toString());
    pitchDeck.images = imagesPaths;
    return pitchDeck.save();
  }

  async create(pitchDeck: CreatePitchDeck) {
    return this.pitchDeckModel.create(pitchDeck);
  }
}
