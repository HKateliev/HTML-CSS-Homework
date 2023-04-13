import { StockMovement } from './stckMvm.model';
export declare class StockMovementService {
    private stockMvmModel;
    constructor(stockMvmModel: typeof StockMovement);
    find(warehouseID: number): Promise<any[]>;
}
