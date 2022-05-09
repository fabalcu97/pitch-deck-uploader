import { UploadedFile } from 'src/core/types/file';

abstract class FileToImagesConverter {
  file: UploadedFile;

  constructor(file: UploadedFile) {
    this.file = file;
  }

  abstract getImages(): string[];
}

export default FileToImagesConverter;
