import { IsNotEmpty } from 'class-validator';

export class CreatePitchDeckDto {
  @IsNotEmpty()
  companyName: string;

  file: File;
}
