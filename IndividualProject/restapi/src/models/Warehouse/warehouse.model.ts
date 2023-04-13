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
import { Client } from '../Client/client.model';
import { Product } from '../Product/product.model';
import { ProductWarehouse } from '../ProductWarehouse/productWarehouse.model';

@Table({ timestamps: false })
export class Warehouse extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  warehouseID: number;

  @Column({ allowNull: false })
  warehouseName: string;

  @Column({ allowNull: false })
  maxStockAmount: number;

  @ForeignKey(() => Client)
  @Column
  clientID: number;

  @BelongsTo(() => Client)
  client: Client;

  @BelongsToMany(() => Product, () => ProductWarehouse)
  products: Product[];
}
