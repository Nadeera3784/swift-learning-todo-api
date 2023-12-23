import { IsNotEmpty, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongoose';

export class IdParamValidation {
  @IsMongoId()
  @IsNotEmpty()
  id: ObjectId;
}
