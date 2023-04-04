import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import CreateTableDto from './dto/create-table.dto';
import UpdateTableDto from './dto/update-table.dto';
import { Table } from './schemas/table.schemas';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly TableService: TableService) {}
  @Get()
  findAll(@Query('date') date: string) {
    if (!date) return this.TableService.findAll();
    return this.TableService.search(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TableService.findOne(id);
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return this.TableService.create(createTableDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return this.TableService.update(id, updateTableDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.TableService.delete(id);
  }
}
