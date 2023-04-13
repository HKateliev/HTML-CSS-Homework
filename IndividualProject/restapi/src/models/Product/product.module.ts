import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StockMovement } from '../StockMovement/stckMvm.model';
import { Warehouse } from '../Warehouse/warehouse.model';
import { ProductController } from './product.controller';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ProductWarehouse } from '../ProductWarehouse/productWarehouse.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Product,
      Warehouse,
      StockMovement,
      ProductWarehouse
    ])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
