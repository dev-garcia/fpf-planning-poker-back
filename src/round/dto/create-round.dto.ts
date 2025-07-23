import { ApiProperty } from '@nestjs/swagger';

export class CreateRoundDto {
  @ApiProperty({
    description: 'ID da sala onde a rodada será iniciada',
    example: 'room-uuid-123',
  })
  roomId: string;

  @ApiProperty({
    description: 'ID da tarefa associada à rodada',
    example: 'task-uuid-456',
  })
  taskId: string;
}
