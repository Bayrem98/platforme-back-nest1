import { Injectable } from '@nestjs/common';
import CreateRatingDto from './dto/create-rating.dto';
import { Rating } from './dto/rating.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  async createRating(createRatingDto: CreateRatingDto) {
    const rating = new Rating();
    rating.score = createRatingDto.score;
    await this.ratingRepository.save(rating);
  }
}
