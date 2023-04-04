import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CreateFavorisDto from './dto/create-favori.dto';
import UpdateFavorisDto from './dto/update-favori.dto';
import { Favoris } from './favoris.interface';
import { FavorisDocument } from './schemas/favori.schema';
import { Model } from 'mongoose';
import { Book } from 'src/book/schemas/book.schema';

@Injectable()
export class FavorisService {
  constructor(
    @InjectModel(Book.name) private favorisModel: Model<FavorisDocument>,
  ) {}

  async findOne(_id: string): Promise<Favoris> {
    return await this.favorisModel.findOne({ _id }).select('-password').exec();
  }

  async findOneByFavori(favori: string): Promise<Favoris> {
    return this.favorisModel.findOne({ favori }).exec();
  }

  async findAll(): Promise<Favoris[]> {
    return await this.favorisModel.find().select('-password').exec();
  }

  async create(createFavorisDto: CreateFavorisDto): Promise<Favoris> {
    const favori = await this.findOneByFavori(createFavorisDto.favori);
    if (favori)
      throw new HttpException('favori already used', HttpStatus.BAD_REQUEST);
    const createdFavori = new this.favorisModel(createFavorisDto);
    return createdFavori.save();
  }

  async update(
    id: string,
    updateFavorisDto: UpdateFavorisDto,
  ): Promise</*UpdateResult*/ any> {
    return this.favorisModel.updateOne({ _id: id }, updateFavorisDto);
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.favorisModel.deleteOne({ _id: id });
  }
}
