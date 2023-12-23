import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
}
