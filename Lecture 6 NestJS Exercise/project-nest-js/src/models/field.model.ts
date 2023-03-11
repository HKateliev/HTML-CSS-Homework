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
export class Field extends Model {
  @PrimaryKey
  @ForeignKey(() => Farm)
  @Column
  fieldID: number;

  @BelongsTo(() => Farm)
  field: Field;

  @Column
  soilType: string;

  @Column
  cropType: string;
}
