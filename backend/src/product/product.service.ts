import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/CreateProductDto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  create(productDTO: CreateProductDto) {
    const product = this.repo.create(productDTO);
    return this.repo.save(product);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const product = await this.repo.findOne(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }
  
  findByCatgory(category: string) {
    return this.repo.find({ category });
  }
}
