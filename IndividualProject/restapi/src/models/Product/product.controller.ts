import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Session
} from '@nestjs/common';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productSevice: ProductService) {}

  @Get()
  findAllProducts() {
    return this.productSevice.find();
  }

  @Post('/createProduct')
  async createWarehouse(
    @Body() body: CreateProductDto,
    @Session() session: any
  ) {
    const product = await this.productSevice.create(
      body.productName,
      body.productSizeUnit,
      body.isHazardous
    );
    session.productID = product.productID;
    return product;
  }

  @Delete('/:productID')
  removeUser(@Param('productID') productID: string) {
    return this.productSevice.remove(parseInt(productID));
  }
}
