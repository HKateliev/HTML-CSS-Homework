import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Farm } from './farm.model';

@Table
export class Customer extends Model {
  @PrimaryKey
  @ForeignKey(() => Farm)
  @Column
  customerID: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column
  customerName: string;

  @Column
  customerEmail: string;

  @Column
  customerPhone: string;
}
