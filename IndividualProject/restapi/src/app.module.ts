import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './models/Client/client.model';
import { ClientModule } from './models/Client/client.module';
import { Product } from './models/Product/product.model';
import { ProductModule } from './models/Product/product.module';
import { StockMovement } from './models/StockMovement/stckMvm.model';
import { StockMovementModule } from './models/StockMovement/stckMvm.module';
import { Warehouse } from './models/Warehouse/warehouse.model';
import { WarehouseModule } from './models/Warehouse/warehouse.module';
import { ProductWarehouse } from './models/ProductWarehouse/productWarehouse.model';
import { ProductWarehouseModule } from './models/ProductWarehouse/productWarehouse.module';
import { timestamp } from 'rxjs';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hkateliev99',
      database: 'warehouse',
      models: [Client, Warehouse, Product, StockMovement, ProductWarehouse],
      synchronize: true,
      autoLoadModels: true
    }),
    ClientModule,
    WarehouseModule,
    ProductModule,
    StockMovementModule,
    ProductWarehouseModule
  ],
  providers: []
})
export class AppModule {}
