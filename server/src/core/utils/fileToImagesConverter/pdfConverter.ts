import { writeFile } from 'fs';
import { dirname, join } from 'path';
import { fromBuffer } from 'pdf2pic';
import { Options } from 'pdf2pic/dist/types/options';
import { ToBase64Response } from 'pdf2pic/dist/types/toBase64Response';
import FileToImagesConverter from 'src/core/utils/fileToImagesConverter';

class PDFToImagesConverter extends FileToImagesConverter {
  private options: Options = {
    density: 100,
    format: 'png',
    width: 1200,
    height: 600,
  };

  async getImages(id: string): Promise<string[]> {
    const base64Images = await fromBuffer(this.file.buffer, this.options).bulk(
      -1,
      true,
    );
    const imagesPaths = base64Images.map((image: ToBase64Response) => {
      const imagePath = join(
        dirname(require.main.filename),
        '..',
        this.mediaPath,
        `${id}-${image.page}.png`,
      );

      // This could be moved to an abstract class which would implement certain methods.
      // That way this could plug in different storage methods
      writeFile(imagePath, image.base64, 'base64', function (error) {
        if (error) {
          console.error(error);
          throw new Error('Error storing images');
        }
      });
      return `/pitch-deck/${id}/image/${image.page}`;
    });

    await Promise.all(imagesPaths);
    return imagesPaths;
  }
}

export default PDFToImagesConverter;
