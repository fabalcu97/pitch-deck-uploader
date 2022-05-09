import { ConfigService } from '@nestjs/config';
import { UploadedFile } from 'src/core/types/file';

abstract class FileToImagesConverter {
  file: UploadedFile;
  mediaPath: string;

  constructor(file: UploadedFile, private configService: ConfigService) {
    this.file = file;
    this.mediaPath = configService.get('mediaPath');
  }

  abstract getImages(id: string): string[] | Promise<string[]>;
}

export default FileToImagesConverter;
