import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptRepository } from '@app/modules/security/infrastructure/persistence/repositories/loginAttempt/loginAttempt.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all loginAttempts.
 */
@Injectable()
export class FindAllLoginAttempt {
  /**
   * Constructs a new instance of the `FindAllLoginAttemptService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _loginAttemptRepository - The repository for accessing loginAttempt data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _loginAttemptRepository: LoginAttemptRepository,
  ) {}

  /**
   * Handles the finding of all loginAttempts.
   * @returns A promise that resolves to an array of LoginAttemptResponseDto objects.
   */
  async handle(): Promise<LoginAttemptResponseDto[]> {
    const loginAttempts = await this._loginAttemptRepository.getAll();

    const response = this._mapper.mapArray(
      loginAttempts,
      LoginAttempt,
      LoginAttemptResponseDto,
    );

    return response;
  }
}
