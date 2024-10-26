import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptRepository } from '@app/modules/security/infrastructure/persistence/repositories/loginAttempt/loginAttempt.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a loginAttempt by its ID.
 */
@Injectable()
export class FindOneLoginAttempt {
  /**
   * Constructs a new instance of the FindOneLoginAttemptService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _loginAttemptRepository - The repository for accessing loginAttempt data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _loginAttemptRepository: LoginAttemptRepository,
  ) {}

  /**
   * Retrieves a loginAttempt by its ID.
   *
   * @param id - The ID of the loginAttempt to retrieve.
   * @returns A Promise that resolves to a LoginAttemptResponseDto object representing the retrieved loginAttempt.
   */
  async handle(id: number): Promise<LoginAttemptResponseDto> {
    const loginAttempt = await this._loginAttemptRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      loginAttempt,
      LoginAttempt,
      LoginAttemptResponseDto,
    );

    return response;
  }
}
