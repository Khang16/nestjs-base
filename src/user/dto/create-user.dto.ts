import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsInt,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @MaxLength(20)
  username: string;
  @IsInt()
  age: number;
  @IsString()
  @MinLength(3)
  password: string;
}
