import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Farm } from './farm.model';

@Injectable()
export class FarmService {
  constructor(
    @InjectModel(Farm)
    private farmModel: typeof Farm,
  ) {}
}
