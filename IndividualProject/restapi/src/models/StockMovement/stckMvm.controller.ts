import { Controller, Get, Query } from '@nestjs/common';
import { StockMovementService } from './stckMvm.service';

@Controller('stockMvm')
export class StockMovementController {
  constructor(private stockMvmService: StockMovementService) {}

  @Get()
  findAllWarehousesByStck(@Query('warehouseID') warehouseID: number) {
    return this.stockMvmService.find(warehouseID);
  }
}
