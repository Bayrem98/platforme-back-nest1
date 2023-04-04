import { IsMongoId, IsOptional } from 'class-validator';

export default class UpdateFavorisDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  favori?: string;
}
