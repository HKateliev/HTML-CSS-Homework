import { HasMany, Model } from 'sequelize-typescript';
import {
  Column,
  ForeignKey,
  PrimaryKey,
  Table,
  BelongsTo
} from 'sequelize-typescript';
import { Warehouse } from '../Warehouse/warehouse.model';

@Table({ timestamps: false })
export class Client extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  clientID: number;

  @Column({ allowNull: false })
  clientUsername: string;

  @Column({ allowNull: false })
  clientEmail: string;

  @Column({ allowNull: false })
  clientPassword: number;

  @HasMany(() => Warehouse)
  warehouses: Warehouse[];
}
