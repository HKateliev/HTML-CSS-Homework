import { Model } from 'sequelize-typescript';
import { Warehouse } from '../Warehouse/warehouse.model';
export declare class Client extends Model {
    clientID: number;
    clientUsername: string;
    clientEmail: string;
    clientPassword: number;
    warehouses: Warehouse[];
}
