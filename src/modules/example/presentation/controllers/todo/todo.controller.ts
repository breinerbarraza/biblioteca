import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { CreateTodo } from '@app/modules/example/services/useCases/todo/createTodo.service';
import { FindAllTodo } from '@app/modules/example/services/useCases/todo/findAllTodo.service';

/**
 * Todo controller
 */
@Controller('todos')
@ApiTags('Todos')
export class TodoController {
  constructor(
    private readonly _createTodo: CreateTodo,
    private readonly _findAllTodo: FindAllTodo,
  ) {}

  /**
   * Create a new todo
   * @param createTodoDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createTodoDto: TodoRequestDto) {
    return this._createTodo.handle(createTodoDto);
  }

  /**
   * Get all todos
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllTodo.handle();
  }
}
