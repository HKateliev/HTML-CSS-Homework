import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StockMovement } from './stckMvm.model';

@Injectable()
export class StockMovementService {
  constructor(
    @InjectModel(StockMovement)
    private stockMvmModel: typeof StockMovement,
  ) {}

  
    async find(warehouseID: number) {
      const stockMvm = await StockMovement.findAll({ where: { warehouseID } });
      return stockMvm.map((movemenet) => movemenet.toJSON());
    }
  
}