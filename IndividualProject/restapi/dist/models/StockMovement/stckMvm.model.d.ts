import { Model } from 'sequelize-typescript';
export declare class StockMovement extends Model {
    stockMovementID: number;
    warehouseID: number;
    productID: number;
    movementDate: Date;
    quantity: number;
    isImport: boolean;
}
