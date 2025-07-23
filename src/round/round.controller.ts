import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { RoundService } from './round.service';
import { CreateRoundDto } from './dto/create-round.dto';
import { VoteService } from 'src/vote/vote.service';

@Controller('round')
export class RoundController {
  constructor(
    private readonly roundService: RoundService,
    private readonly voteService: VoteService,
  ) {}

  @Get(':round_id/task/:task_id/results')
  getResults(
    @Param('round_id') round_id: string,
    @Param('task_id') task_id: string,
  ) {
    return this.voteService.getResults(round_id, task_id);
  }

  @Get('')
  findAll() {
    return this.roundService.findAll();
  }

  @Get('room/:id')
  getRoundsByRoom(@Param('id') id: string) {
    return this.roundService.getRoundsByRoom(id);
  }

  @Post('start')
  startRound(@Body() createRoundDto: CreateRoundDto) {
    return this.roundService.startRound(createRoundDto);
  }

  @Patch('end/:id')
  endRound(@Param('id') id: string) {
    return this.roundService.endRound(id);
  }
}
