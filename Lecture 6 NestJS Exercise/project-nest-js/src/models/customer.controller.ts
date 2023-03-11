import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  @Get()
  findAll(): string {
    return 'This action returns all customers';
  }

  @Get(':customerID')
  findOne(@Param('customerID') customerID: number) {
    return `This action returns a #${customerID} customer`;
  }

  @Post()
  async create(@Body() createUserDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  @Put(':customerName')
  update(
    @Param('customerName') customerName: string,
    @Body() updateCustomerDto: UpdateCustomerDto)
 {
    return `This action updates a #${customerName} customer`;
  }

  @Delete(':customerID')
  remove(@Param('customerID') customerID: number) {
    return `This action removes a #${customerID} customer`;
  }
}
