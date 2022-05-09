export type UploadedFile = Express.Multer.File;

export enum SupportedMimeTypesEnum {
  PDF = 'application/pdf',
  PPT = 'application/vnd.ms-powerpoint',
  PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
}

export const supportedMimeTypesArray: SupportedMimeTypesEnum[] = [
  SupportedMimeTypesEnum.PDF,
  SupportedMimeTypesEnum.PPT,
  SupportedMimeTypesEnum.PPTX,
];
