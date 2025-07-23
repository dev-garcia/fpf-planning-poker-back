import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  spectator: boolean;
}
