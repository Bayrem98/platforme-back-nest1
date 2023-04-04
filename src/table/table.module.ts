import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { TableSchema } from './schemas/table.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Table', schema: TableSchema }]),
  ],
  providers: [TableService],
  controllers: [TableController],
})
export class TableModule {}
