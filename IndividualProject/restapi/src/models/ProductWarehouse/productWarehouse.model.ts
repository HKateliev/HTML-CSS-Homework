import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  HasOne
} from 'sequelize-typescript';
import { Warehouse } from '../Warehouse/warehouse.model';
import { Product } from '../Product/product.model';

@Table({ timestamps: false })
export class ProductWarehouse extends Model {
  @ForeignKey(() => Warehouse)
  @Column
  warehouseID: number;

  @ForeignKey(() => Product)
  @Column
  productID: number;
}
