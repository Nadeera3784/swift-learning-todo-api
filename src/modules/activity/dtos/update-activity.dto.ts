import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class UpdateActivityDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
}
