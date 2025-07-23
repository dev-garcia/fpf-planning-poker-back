import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoomService {
  private rooms: Array<CreateRoomDto & { uuid: string }> = [];

  create(createRoomDto: CreateRoomDto) {
    const room = {
      ...createRoomDto,
      uuid: uuidv4(),
    };
    this.rooms.push(room);
    return room;
  }

  findAll() {
    return this.rooms;
  }

  findOne(uuid: string) {
    return this.rooms.find((r) => r.uuid === uuid) ?? null;
  }
}
