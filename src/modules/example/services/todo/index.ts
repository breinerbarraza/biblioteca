/* istanbul ignore file */
import { CreateTodo } from './createTodo.service';
import { FindAllTodo } from './findAllTodo.service';

/**
 * Array of todo use cases.
 */
export const TODO_USE_CASES = [CreateTodo, FindAllTodo];
