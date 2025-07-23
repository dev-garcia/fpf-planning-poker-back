import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos participantes' })
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar participante por id' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.participantService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar participante' })
  @ApiBody({
    type: CreateParticipantDto,
    examples: {
      participante: {
        summary: 'Exemplo de participante',
        value: {
          name: 'Cristian Garcia',
          spectator: false,
        },
      },
    },
  })
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }

  @Post('access-room')
  @ApiOperation({ summary: 'Acessar sala como convidado' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        room_id: { type: 'string' },
        spectator: { type: 'boolean' },
      },
      required: ['name', 'room_id'],
    },
    examples: {
      join: {
        summary: 'Join room',
        value: {
          name: 'Matheus',
          room_id: 'room-uuid',
          spectator: false,
        },
      },
    },
  })
  accessRoom(
    @Body() body: { name: string; room_id: string; spectator?: boolean },
  ) {
    return this.participantService.accessRoom(body);
  }
}
