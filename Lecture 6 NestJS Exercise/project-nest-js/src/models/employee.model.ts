import {
  Column,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Farm } from './farm.model';

@Table
export class Employee extends Model {
  @PrimaryKey
  @Column
  employeeID: number;

  @Column
  employeeName: string;

  @Column
  duty: string;

  @Column
  farmId: number;

  @HasOne(() => Farm)
  farm: Farm[];
}
