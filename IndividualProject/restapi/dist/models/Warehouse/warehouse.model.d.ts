import { Model } from 'sequelize-typescript';
import { Client } from '../Client/client.model';
import { Product } from '../Product/product.model';
export declare class Warehouse extends Model {
    warehouseID: number;
    warehouseName: string;
    maxStockAmount: number;
    clientID: number;
    client: Client;
    products: Product[];
}
