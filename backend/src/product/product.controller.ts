import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/shared/decorators/check-policies.decorators';
import { Public } from 'src/shared/decorators/public.decorator';
import { Action } from 'src/shared/enums/action.enum';
import { CreateProductDto } from './dto/CreateProductDto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Product))
  @Post('/create')
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Product))
  @Get('/category/:category')
  findByCategory(@Param('category') category: string) {
    return this.productService.findByCatgory(category);
  }

  @Delete('/delete/:id')
  deleteById(@Param('id') id: number) {
    return this.productService.deleteById(id);
  }
}
