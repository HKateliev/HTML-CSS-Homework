import { Warehouse } from './warehouse.model';
export declare class WarehouseService {
    private warehouseModel;
    constructor(warehouseModel: typeof Warehouse);
    create(warehouseName: string, maxStockAmount: number): Promise<any>;
    find(clientID: number): Promise<any[]>;
    update(warehouseID: number, attrs: Partial<Warehouse>): Promise<any>;
    remove(warehouseID: number): Promise<any>;
}
