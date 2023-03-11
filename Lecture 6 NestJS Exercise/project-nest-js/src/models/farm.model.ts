import {
  Column,
  Model,
  Table,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Customer } from './customer.model';
import { Employee } from './employee.model';
import { Field } from './field.model';

@Table
export class Farm extends Model {
  @PrimaryKey
  @ForeignKey(() => Employee)
  @Column
  farmID: number;

  @BelongsTo(() => Employee)
  farm: Farm;

  @Column({
    references: {
      model: Customer,
      key: 'customerID',
    },
  })
  ownerID: number;

  @HasOne(() => Customer)
  owner: Customer[];

  @Column
  farmName: string;

  @Column({
    references: {
      model: Field,
      key: 'fieldID',
    },
  })
  fieldID: number;

  @HasOne(() => Field)
  field: Field[];

  @Column
  place: string;
}
