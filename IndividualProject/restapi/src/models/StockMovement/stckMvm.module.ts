import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../Product/product.model';
import { Warehouse } from '../Warehouse/warehouse.model';
import { StockMovementController } from './stckMvm.controller';
import { StockMovement } from './stckMvm.model';
import { StockMovementService } from './stckMvm.service';

@Module({
  imports: [SequelizeModule.forFeature([StockMovement, Warehouse, Product])],
  providers: [StockMovementService],
  controllers: [StockMovementController]
})
export class StockMovementModule {}
