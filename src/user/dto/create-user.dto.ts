import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @MaxLength(20)
  username: string;
  @IsString()
  @MinLength(3)
  password: string;
}
