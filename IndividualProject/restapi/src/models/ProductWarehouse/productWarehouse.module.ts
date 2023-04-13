import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Warehouse } from '../Warehouse/warehouse.model';
import { Product } from '../Product/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Warehouse])],
  providers: [],
  controllers: []
})
export class ProductWarehouseModule {}
