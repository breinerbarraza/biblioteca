import { LoginAttemptRequestDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-request.dto';
import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptRepository } from '@app/modules/security/infrastructure/persistence/repositories/loginAttempt/loginAttempt.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new loginAttempt.
 */
@Injectable()
export class CreateLoginAttempt {
  /**
   * Creates an instance of the CreateLoginAttemptService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _loginAttemptRepository - The repository for managing LoginAttempt entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _loginAttemptRepository: LoginAttemptRepository,
  ) {}

  /**
   * Handles the creation of a new loginAttempt.
   *
   * @param createLoginAttemptDto - The data transfer object containing the loginAttempt details.
   * @returns The response containing the created loginAttempt.
   */
  async handle(
    loginAttemptRequestDto: LoginAttemptRequestDto,
  ): Promise<LoginAttemptResponseDto> {
    const loginAttemptPayload = this._mapper.map(
      loginAttemptRequestDto,
      LoginAttemptRequestDto,
      LoginAttempt,
    );

    const loginAttempt =
      await this._loginAttemptRepository.create(loginAttemptPayload);

    const response = this._mapper.map(
      loginAttempt,
      LoginAttempt,
      LoginAttemptResponseDto,
    );

    return response;
  }
}
