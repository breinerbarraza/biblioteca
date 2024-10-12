import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  SaveOptions,
} from 'typeorm';

export type UpdateCriteriaType<E> =
  | string
  | number
  | Date
  | string[]
  | number[]
  | Date[]
  | FindOptionsWhere<E>
  | ObjectId
  | ObjectId[];

export type DeleteCriteriaType<E> = CriteriaType<E>;
export type GetAllCriteriaType<E> = FindManyOptions<E>;
export type GetOneCriteriaType<E> = FindOneOptions<E>;
export type SaveOptionsType<E> = SaveOptions<E>;
