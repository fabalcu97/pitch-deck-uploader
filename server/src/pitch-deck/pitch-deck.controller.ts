import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile as UploadedFileType } from 'src/core/types/file';
import { PitchDeck } from 'src/pitch-deck/models/pitchDeck.model';
import { PitchDeckService } from 'src/pitch-deck/pitch-deck.service';
import { CreatePitchDeckDto } from 'src/pitch-deck/types/pitchDeck.dto';

@Controller('pitch-deck')
export class PitchDeckController {
  supportedMimeTypes = [
    'application/pdf',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ];

  constructor(private pitchDeckService: PitchDeckService) {}

  @Get('')
  async findAll(): Promise<PitchDeck[]> {
    return [];
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<PitchDeck> {
    const pitchDeck = await this.pitchDeckService.findById(id);
    if (!pitchDeck) {
      throw new NotFoundException('Pitch deck not found');
    }
    return pitchDeck;
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPitchDeck(
    @UploadedFile() file: UploadedFileType,
    @Body() pitchDeck: CreatePitchDeckDto,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    if (!this.supportedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('File not supported');
    }
    const images = await this.pitchDeckService.fileToImages(file);
    const newPitchDeck = await this.pitchDeckService.create({
      companyName: pitchDeck.companyName,
      images,
    });
    return newPitchDeck;
  }
}
