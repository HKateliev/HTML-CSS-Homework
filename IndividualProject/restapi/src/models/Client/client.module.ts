import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Warehouse } from '../Warehouse/warehouse.model';
import { ClientController } from './client.controller';
import { Client } from './client.model';
import { ClientService } from './client.service';
import { AuthService } from './auth.service';

@Module({
  imports: [SequelizeModule.forFeature([Client, Warehouse])],
  providers: [ClientService, AuthService],
  controllers: [ClientController]
})
export class ClientModule {}
