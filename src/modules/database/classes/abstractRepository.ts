import {
  DeleteResult,
  FindManyOptions,
  InsertResult,
  ObjectLiteral,
  Repository,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
} from '../types';

/**
 * Representa el tipo de criterio que se puede utilizar para actualizar entidades.
 * Puede ser una cadena, un número, una fecha, una matriz de cadenas, una matriz de números, una matriz de fechas,
 * un objeto FindOptionsWhere, ObjectId o una matriz ObjectId.
 *
 * @template E - El tipo de entidad.
 */
export abstract class AbstractRepository<E extends ObjectLiteral> {
  abstract getAll(options?: GetAllCriteriaType<E>): Promise<E[]>;
  abstract getAllPaginated(options?: FindManyOptions): Promise<[E[], number]>;
  abstract getOne(options: GetOneCriteriaType<E>): Promise<E | null>;
  abstract create(entity: E): Promise<InsertResult>;
  abstract update(
    criteria: UpdateCriteriaType<E>,
    partialEntity: E,
  ): Promise<UpdateResult>;
  abstract delete(criteria: DeleteCriteriaType<E>): Promise<UpdateResult>;
  abstract destroy(criteria: DeleteCriteriaType<E>): Promise<DeleteResult>;
  abstract save(entity: E, options?: SaveOptions): Promise<E>;
  abstract getTypeOrmRepository(): Repository<E>;
}
