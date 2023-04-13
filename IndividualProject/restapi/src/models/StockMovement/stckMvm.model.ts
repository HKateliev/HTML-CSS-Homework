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
export class StockMovement extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  stockMovementID: number;

  @Column({ allowNull: false })
  warehouseID: number;

  @Column({ allowNull: false })
  productID: number;

  @Column({ allowNull: false })
  movementDate: Date;

  @Column({ allowNull: false })
  quantity: number;

  @Column({ allowNull: false })
  isImport: boolean;
}
