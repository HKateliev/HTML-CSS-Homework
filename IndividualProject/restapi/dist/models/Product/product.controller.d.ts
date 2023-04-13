import { CreateProductDto } from 'src/dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productSevice;
    constructor(productSevice: ProductService);
    findAllProducts(): Promise<any[]>;
    createWarehouse(body: CreateProductDto, session: any): Promise<any>;
    removeUser(productID: string): Promise<any>;
}
