import { Model } from 'sequelize-typescript';
import { Warehouse } from '../Warehouse/warehouse.model';
export declare class Product extends Model {
    productID: number;
    productName: string;
    productSizeUnit: number;
    isHazardous: boolean;
    warehouses: Warehouse[];
}
