import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'tarea creada';
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'tarea actulizada';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `tarea eliminada ${id}`;
  }
}
