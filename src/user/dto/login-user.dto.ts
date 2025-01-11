import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  username: string;
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  password: string;
}
