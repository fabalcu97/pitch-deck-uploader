import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import {
  supportedMimeTypesArray,
  SupportedMimeTypesEnum,
  UploadedFile as UploadedFileType,
} from 'src/core/types/file';
import { PitchDeck } from 'src/pitch-deck/models/pitchDeck.model';
import { PitchDeckService } from 'src/pitch-deck/pitch-deck.service';
import { CreatePitchDeckDto } from 'src/pitch-deck/types/pitchDeck.dto';

@Controller('pitch-deck')
export class PitchDeckController {
  supportedMimeTypes = supportedMimeTypesArray;

  constructor(private pitchDeckService: PitchDeckService) {}

  @Get('/:id/image/:page')
  async serveAvatar(
    @Param('id') pitchDeckId: string,
    @Param('page') page: number,
    @Res() res: Response,
  ): Promise<any> {
    res.sendFile(`${pitchDeckId}-${page}.png`, { root: 'media' });
  }

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
    if (
      !this.supportedMimeTypes.includes(file.mimetype as SupportedMimeTypesEnum)
    ) {
      throw new BadRequestException('File not supported');
    }
    const newPitchDeck = await this.pitchDeckService.create({
      companyName: pitchDeck.companyName,
    });
    await this.pitchDeckService.generateImages(newPitchDeck, file);
    return newPitchDeck;
  }
}
