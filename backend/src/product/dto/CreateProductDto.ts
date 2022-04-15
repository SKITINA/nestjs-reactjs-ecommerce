import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  price: number;

  @IsNumber()
  countInStock: number;

  @IsNumber()
  authorId: number;
}
