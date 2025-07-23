import { Injectable } from '@nestjs/common';
import { CreateRoundDto } from './dto/create-round.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoundService {
  private rounds: Array<{
    uuid: string;
    roomId: string;
    taskId: string;
    startedAt: Date;
    finishedAt?: Date;
  }> = [];

  startRound(createRoundDto: CreateRoundDto) {
    const round = {
      uuid: uuidv4(),
      roomId: createRoundDto.roomId,
      taskId: createRoundDto.taskId,
      startedAt: new Date(),
    };
    this.rounds.push(round);
    return round;
  }

  endRound(round_id: string) {
    const round = this.rounds.find((r) => r.uuid === round_id);
    if (!round) return null;
    round.finishedAt = new Date();
    return round;
  }

  findAll() {
    return this.rounds;
  }

  getRoundsByRoom(id: string) {
    return this.rounds
      .filter((r) => r.roomId === id)
      .map((r) => ({
        uuid: r.uuid,
        taskId: r.taskId,
        startedAt: r.startedAt,
        finishedAt: r.finishedAt,
        status: r.finishedAt ? 'finalizada' : 'ativa',
      }));
  }
}
