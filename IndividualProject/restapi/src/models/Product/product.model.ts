import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  HasOne,
  BelongsToMany
} from 'sequelize-typescript';
import { Warehouse } from '../Warehouse/warehouse.model';
import { ProductWarehouse } from '../ProductWarehouse/productWarehouse.model';

@Table({ timestamps: false })
export class Product extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  productID: number;

  @Column({ allowNull: false })
  productName: string;

  @Column({ allowNull: false })
  productSizeUnit: number;

  @Column({ allowNull: false })
  isHazardous: boolean;

  @BelongsToMany(() => Warehouse, () => ProductWarehouse)
  warehouses: Warehouse[];
}
