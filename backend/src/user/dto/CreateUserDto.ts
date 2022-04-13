import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
 email: string;

  @IsBoolean()
  isAdmin:boolean;
}
 