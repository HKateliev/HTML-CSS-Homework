import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Field } from './field.model';
import { FieldController } from './field.controller';
import { FieldService } from './field.service';
import { Farm } from './farm.model';

@Module({
  imports: [SequelizeModule.forFeature([Field, Farm])],
  providers: [FieldService],
  controllers: [FieldController],
})
export class FieldModule {}
