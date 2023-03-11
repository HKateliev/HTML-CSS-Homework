import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.model';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Farm } from './farm.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer, Farm])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
