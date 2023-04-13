import { StockMovementService } from './stckMvm.service';
export declare class StockMovementController {
    private stockMvmService;
    constructor(stockMvmService: StockMovementService);
    findAllWarehousesByStck(warehouseID: number): Promise<any[]>;
}
