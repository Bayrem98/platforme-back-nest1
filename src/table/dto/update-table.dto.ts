import { IsMongoId, IsOptional } from 'class-validator';

export default class UpdateTableDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  mois?: string;
  @IsOptional()
  phaseLun?: string;
  @IsOptional()
  date?: string;
  @IsOptional()
  signe?: string;
  @IsOptional()
  coverPath?: string;
}
