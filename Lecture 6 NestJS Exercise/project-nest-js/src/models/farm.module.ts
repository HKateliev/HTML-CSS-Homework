import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farm } from './farm.model';
import { FarmController } from './farm.controller';
import { FarmService } from './farm.service';
import { Employee } from './employee.model';
import { Customer } from './customer.model';
import { Field } from './field.model';

@Module({
  imports: [SequelizeModule.forFeature([Farm, Employee, Customer, Field])],
  providers: [FarmService],
  controllers: [FarmController],
})
export class FarmModule {}
