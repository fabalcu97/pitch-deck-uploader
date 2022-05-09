import { ConfigService } from '@nestjs/config';
import { SupportedMimeTypesEnum, UploadedFile } from 'src/core/types/file';
import PDFToImagesConverter from 'src/core/utils/fileToImagesConverter/pdfConverter';
import PPTXToImagesConverter from 'src/core/utils/fileToImagesConverter/pptxConverter';

export function getFileToImageConverter(
  file: UploadedFile,
  configService: ConfigService,
) {
  switch (file.mimetype as SupportedMimeTypesEnum) {
    case SupportedMimeTypesEnum.PDF:
      return new PDFToImagesConverter(file, configService);
    case SupportedMimeTypesEnum.PPT:
    case SupportedMimeTypesEnum.PPTX:
      return new PPTXToImagesConverter(file, configService);
    default:
      throw new Error('Not supported mimetype');
  }
}
