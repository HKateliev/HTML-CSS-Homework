import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Field } from './field.model';

@Injectable()
export class FieldService {
  constructor(
    @InjectModel(Field)
    private fieldModel: typeof Field,
  ) {}
}
