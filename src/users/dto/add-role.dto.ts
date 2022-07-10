import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
 @IsString({message: "must be string"})
  readonly value: string;
 @IsNumber({}, {message: "must ne number"})
  readonly userId: number;
}