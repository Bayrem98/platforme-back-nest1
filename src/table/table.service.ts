import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Table, TableDocument } from './schemas/table.schemas';
import { Model } from 'mongoose';
import CreateTableDto from './dto/create-table.dto';
import UpdateTableDto from './dto/update-table.dto';

@Injectable()
export class TableService {
  async search(date: string) {
    return this.tableModel.find({ date }).exec();
  }

  constructor(
    @InjectModel(Table.name) private tableModel: Model<TableDocument>,
  ) {}

  async create(createTableDto: CreateTableDto): Promise<Table> {
    const createdTable = new this.tableModel({
      ...createTableDto,
    });
    return createdTable.save();
  }

  async update(
    id: string,
    updateTableDto: UpdateTableDto,
  ): Promise</*UpdateResult*/ any> {
    return this.tableModel.updateOne({ _id: id }, updateTableDto);
  }

  async findOne(id: string): Promise<Table> {
    return this.tableModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Table[]> {
    return this.tableModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.tableModel.deleteOne({ _id: id });
  }
}
