import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Field } from './models/field.model';
import { Customer } from './models/customer.model';
import { Farm } from './models/farm.model';
import { Employee } from './models/employee.model';
import { FieldModule } from './models/field.module';
import { CustomerModule } from './models/customer.module';
import { FarmModule } from './models/farm.module';
import { EmployeeModule } from './models/employee.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'hkateliev99',
      database: 'postgres',
      models: [Field, Customer, Employee, Farm],
    }),
    FieldModule,
    CustomerModule,
    FarmModule,
    EmployeeModule,
  ],
  providers: [AppService],
})
export class AppModule {}
