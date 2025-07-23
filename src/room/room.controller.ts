import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar sala por id' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') uuid: string) {
    return this.roomService.findOne(uuid);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar sala' })
  @ApiBody({
    type: CreateRoomDto,
    examples: {
      sala: {
        summary: 'Exemplo de sala',
        value: {
          name: 'Sprint 1',
          creator: 'uuid do criador da sala',
        },
      },
    },
  })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }
}
