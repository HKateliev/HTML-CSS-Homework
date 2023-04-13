import { Product } from './product.model';
export declare class ProductService {
    private productModel;
    constructor(productModel: typeof Product);
    create(productName: string, productSizeUnit: number, isHazardous: boolean): Promise<any>;
    find(): Promise<any[]>;
    update(productID: number, attrs: Partial<Product>): Promise<any>;
    remove(productID: number): Promise<any>;
}
