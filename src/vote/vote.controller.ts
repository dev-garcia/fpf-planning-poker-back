import { Controller, Post, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  createVote(@Body() createVoteDto: CreateVoteDto) {
    return this.voteService.createVote(createVoteDto);
  }
}
