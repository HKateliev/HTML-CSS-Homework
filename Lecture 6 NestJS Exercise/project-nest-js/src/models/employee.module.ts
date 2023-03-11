import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Farm } from './farm.model';

@Module({
  imports: [SequelizeModule.forFeature([Employee, Farm])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
