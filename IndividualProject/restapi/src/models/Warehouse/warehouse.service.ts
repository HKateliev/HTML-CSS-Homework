import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Warehouse } from './warehouse.model';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectModel(Warehouse)
    private warehouseModel: typeof Warehouse
  ) {}
  async create(warehouseName: string, maxStockAmount: number) {
    const client = await Warehouse.create({ warehouseName, maxStockAmount });
    return client.toJSON();
  }

  async find(clientID: number) {
    const warehouses = await Warehouse.findAll({ where: { clientID } });
    return warehouses.map((warehouse) => warehouse.toJSON());
  }

  async update(warehouseID: number, attrs: Partial<Warehouse>) {
    const warehouse = await Warehouse.findByPk(warehouseID);
    if (!warehouse) {
      throw new NotFoundException('warehouse not found');
    }
    await warehouse.update(attrs);
    return warehouse.toJSON();
  }

  async remove(warehouseID: number) {
    const warehouse = await Warehouse.findByPk(warehouseID);
    if (!warehouse) {
      throw new NotFoundException('warehouse not found');
    }
    await warehouse.destroy();
    return warehouse.toJSON();
  }
}
