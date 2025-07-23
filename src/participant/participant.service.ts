import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ParticipantService {
  private participants: Array<
    CreateParticipantDto & { uuid: string; roomUuid?: string }
  > = [];

  create(createParticipantDto: CreateParticipantDto) {
    const participant = {
      uuid: uuidv4(),
      ...createParticipantDto,
    };
    this.participants.push(participant);
    return participant;
  }

  accessRoom(body: { name: string; room_id: string; spectator?: boolean }) {
    const participant = {
      uuid: uuidv4(),
      name: body.name,
      spectator: body.spectator ?? false,
      room_id: body.room_id,
    };
    this.participants.push(participant);
    return participant;
  }

  findAll() {
    return this.participants;
  }

  findOne(id: string) {
    return this.participants.find((p) => p.uuid === id) ?? null;
  }
}
