import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, CaslAbilityFactory],
  controllers: [ProductController],
})
export class ProductModule {}
