import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}
}
