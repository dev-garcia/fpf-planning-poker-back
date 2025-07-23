import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantModule } from './participant/participant.module';
import { RoomModule } from './room/room.module';
import { TaskModule } from './task/task.module';
import { RoundModule } from './round/round.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [ParticipantModule, RoomModule, TaskModule, RoundModule, VoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
