import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar tarefa vinculada a uma sala' })
  @ApiBody({
    type: CreateTaskDto,
    examples: {
      exemplo: {
        summary: 'Exemplo de criação de tarefa',
        value: {
          title: 'Implementar autenticação',
          description: 'Criar tela e lógica de autenticação de usuários',
          room_id: 'uuid-da-sala',
        },
      },
    },
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
