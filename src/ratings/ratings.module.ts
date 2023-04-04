import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingController } from './ratings.controller';
import { RatingService } from './ratings.service';
import { RatingSchema } from './schemas/rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rating', schema: RatingSchema }]),
  ],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingsModule {}
