import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateFavorisDto from './dto/create-favori.dto';
import UpdateFavorisDto from './dto/update-favori.dto';
import { Favoris } from './favoris.interface';
import { FavorisService } from './favoris.service';

@Controller('favoris')
export class FavorisController {
  constructor(private readonly favorisService: FavorisService) {}

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.favorisService.findOne(_id);
  }

  @Get()
  findAll() {
    return this.favorisService.findAll();
  }

  @Post()
  create(@Body() createFavorisDto: CreateFavorisDto): Promise<Favoris> {
    return this.favorisService.create(createFavorisDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavorisDto: UpdateFavorisDto,
  ): Promise<Favoris> {
    return this.favorisService.update(id, updateFavorisDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.favorisService.delete(id);
  }
}
