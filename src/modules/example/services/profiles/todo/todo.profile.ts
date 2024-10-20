/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { TodoResponseDto } from '@app/modules/example/domain/todo/dto/todo-response.dto';
import { TodoRequestDto } from '@app/modules/example/domain/todo/dto/todo-request.dto';
import { TodoUpdateDto } from '@app/modules/example/domain/todo/dto/todo-update.dto';

/**
 * Todo profile
 */
@Injectable()
export class TodoProfile extends AutomapperProfile {
  /**
   * Constructor
   * @param mapper
   */
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Todo, TodoResponseDto);
      createMap(mapper, TodoRequestDto, Todo);
      createMap(mapper, TodoUpdateDto, Todo);
    };
  }
}
