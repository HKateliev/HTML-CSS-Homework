import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  Session
} from '@nestjs/common';
import { CreateWarehouseDto } from '../../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../../dto/update-warehouse.dto';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @Get()
  findAllWarehouses(@Query('clientID') clientID: number) {
    return this.warehouseService.find(clientID);
  }

  @Post('/createWarehouse')
  async createWarehouse(
    @Body() body: CreateWarehouseDto,
    @Session() session: any
  ) {
    const warehouse = await this.warehouseService.create(
      body.warehouseName,
      body.maxStockAmount
    );
    session.warehouseID = warehouse.warehouseID;
    return warehouse;
  }

  @Delete('/:warehouseID')
  removeWarehouse(@Param('warehouseID') warehouseID: string) {
    return this.warehouseService.remove(parseInt(warehouseID));
  }

  @Patch('/:warehouseID')
  updateWarehouse(
    @Param('warehouseID') warehouseID: string,
    @Body() body: UpdateWarehouseDto
  ) {
    return this.warehouseService.update(parseInt(warehouseID), body);
  }
}
