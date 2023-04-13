import { CreateWarehouseDto } from '../../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../../dto/update-warehouse.dto';
import { WarehouseService } from './warehouse.service';
export declare class WarehouseController {
    private warehouseService;
    constructor(warehouseService: WarehouseService);
    findAllWarehouses(clientID: number): Promise<any[]>;
    createWarehouse(body: CreateWarehouseDto, session: any): Promise<any>;
    removeWarehouse(warehouseID: string): Promise<any>;
    updateWarehouse(warehouseID: string, body: UpdateWarehouseDto): Promise<any>;
}
