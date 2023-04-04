import { Controller, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './dto/rating.entity';

@Controller('ratings')
export class RatingController {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  @Post()
  async createRating(@Body() rating: Rating): Promise<Rating> {
    return this.ratingRepository.save(rating);
  }
}
