import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from '../Client/client.model';
import { WarehouseController } from './warehouse.controller';
import { Warehouse } from './warehouse.model';
import { WarehouseService } from './warehouse.service';
import { ProductWarehouse } from '../ProductWarehouse/productWarehouse.model';

@Module({
  imports: [SequelizeModule.forFeature([Client, Warehouse, ProductWarehouse])],
  providers: [WarehouseService],
  controllers: [WarehouseController]
})
export class WarehouseModule {}
