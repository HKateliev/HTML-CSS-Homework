import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product
  ) {}
  async create(
    productName: string,
    productSizeUnit: number,
    isHazardous: boolean
  ) {
    const product = await Product.create({
      productName,
      productSizeUnit,
      isHazardous
    });
    return product.toJSON();
  }

  async find() {
    const products = await Product.findAll();
    return products.map((product) => product.toJSON());
  }

  async update(productID: number, attrs: Partial<Product>) {
    const product = await Product.findByPk(productID);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    await product.update(attrs);
    return product.toJSON();
  }

  async remove(productID: number) {
    const product = await Product.findByPk(productID);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    await product.destroy();
    return product.toJSON();
  }
}
