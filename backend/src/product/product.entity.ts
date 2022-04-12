import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  price: number;

  @Column()
  countInStock: number;
}
