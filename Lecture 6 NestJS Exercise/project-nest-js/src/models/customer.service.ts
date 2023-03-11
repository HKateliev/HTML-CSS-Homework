import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}
}
