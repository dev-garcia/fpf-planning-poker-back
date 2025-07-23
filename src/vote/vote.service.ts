import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VoteService {
  private votes: Array<{
    round_id: string;
    participant_id: string;
    task_id: string;
    value: number;
  }> = [];

  createVote(createVoteDto: CreateVoteDto) {
    const vote = {
      round_id: createVoteDto.round_id,
      participant_id: createVoteDto.participant_id,
      task_id: createVoteDto.task_id,
      value: createVoteDto.value,
    };
    this.votes.push(vote);
    return vote;
  }

  getResults(round_id: string, task_id: string) {
    const votes = this.votes.filter(
      (v) => v.round_id === round_id && v.task_id === task_id,
    );
    if (votes.length === 0) {
      return {
        count: 0,
        average: null,
        min: null,
        max: null,
        mode: null,
        values: [],
      };
    }
    const values = votes.map((v) => v.value);
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const mode = values
      .sort(
        (a, b) =>
          values.filter((v) => v === a).length -
          values.filter((v) => v === b).length,
      )
      .pop();
    return { count: values.length, average, min, max, mode, values };
  }
}
