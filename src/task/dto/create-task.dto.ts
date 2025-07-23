import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  room_id?: string;
}
