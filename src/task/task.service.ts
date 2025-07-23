import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Array<{
    title: string;
    description: string;
    room_id: string;
    uuid: string;
  }> = [];

  create(createTaskDto: CreateTaskDto): {
    title: string;
    description: string;
    room_id: string;
    uuid: string;
  } {
    const task = {
      title: createTaskDto.title!,
      description: createTaskDto.description!,
      room_id: createTaskDto.room_id!,
      uuid: uuidv4(),
    };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(uuid: string) {
    return this.tasks.find((t) => t.uuid === uuid) ?? null;
  }

  delete(uuid: string) {
    const idx = this.tasks.findIndex((t) => t.uuid === uuid);
    if (idx === -1) return null;
    const [removed] = this.tasks.splice(idx, 1);
    return removed;
  }
}
