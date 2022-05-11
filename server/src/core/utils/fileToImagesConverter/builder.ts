import { ConfigService } from '@nestjs/config';
import { SupportedMimeTypesEnum, UploadedFile } from 'src/core/types/file';
import PDFToImagesConverter from 'src/core/utils/fileToImagesConverter/pdfConverter';

export function getFileToImageConverter(
  file: UploadedFile,
  configService: ConfigService,
) {
  switch (file.mimetype as SupportedMimeTypesEnum) {
    case SupportedMimeTypesEnum.PDF:
      return new PDFToImagesConverter(file, configService);
    default:
      throw new Error('Not supported mimetype');
  }
}
