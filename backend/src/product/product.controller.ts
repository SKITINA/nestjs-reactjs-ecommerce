import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProductDto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post('/create')
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Get('/category/:category')
  findByCategory(@Param('category') category: string) {
    return this.productService.findByCatgory(category);
  }

  @Delete('/delete/:id')
  deleteById(@Param('id') id: number) {
    return this.productService.deleteById(id);
  }
}
