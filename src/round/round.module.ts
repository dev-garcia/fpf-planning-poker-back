import { Module } from '@nestjs/common';
import { RoundController } from './round.controller';
import { RoundService } from './round.service';
import { VoteModule } from '../vote/vote.module';

@Module({
  imports: [VoteModule],
  controllers: [RoundController],
  providers: [RoundService],
})
export class RoundModule {}
