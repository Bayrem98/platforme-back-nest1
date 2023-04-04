import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FavorisSchema } from './schemas/favori.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: FavorisSchema }]),
  ],
  providers: [FavorisService],
  controllers: [FavorisController],
  exports: [FavorisService],
})
export class FavorisModule {}
