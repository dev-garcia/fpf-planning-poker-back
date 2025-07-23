import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty({
    description: 'ID da rodada',
    example: 'round-uuid-123',
  })
  round_id: string;

  @ApiProperty({
    description: 'ID do participante',
    example: 'participant-uuid-456',
  })
  participant_id: string;

  @ApiProperty({
    description: 'ID da tarefa',
    example: 'task-uuid-789',
  })
  task_id: string;

  @ApiProperty({
    description: 'Valor do voto',
    example: 5,
  })
  value: number;
}
