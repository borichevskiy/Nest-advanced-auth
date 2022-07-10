import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'user@mail.ru', description: 'User email'})
  @IsString({message: "Must be string"})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string;

  @ApiProperty({example: '12345', description: 'User password'})
  @IsString({message: "Must be string"})
  @Length(4, 16, {message: "не меньше 4 и не больше 16 "})
  readonly password: string;
}