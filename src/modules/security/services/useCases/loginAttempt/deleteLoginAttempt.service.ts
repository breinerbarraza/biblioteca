import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptRepository } from '@app/modules/security/infrastructure/persistence/repositories/loginAttempt/loginAttempt.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a loginAttempt.
 */
@Injectable()
export class DeleteLoginAttempt {
  /**
   * Constructs a new instance of the DeleteLoginAttemptService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _loginAttemptRepository - The repository for accessing loginAttempt data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _loginAttemptRepository: LoginAttemptRepository,
  ) {}

  /**
   * Handles the deletion of a loginAttempt item.
   *
   * @param id - The ID of the loginAttempt item to be deleted.
   * @returns A promise that resolves to a LoginAttemptResponseDto representing the deleted loginAttempt item.
   */
  async handle(id: number): Promise<LoginAttemptResponseDto> {
    const loginAttempt = await this._loginAttemptRepository.delete({
      id,
    });

    const response = this._mapper.map(
      loginAttempt,
      LoginAttempt,
      LoginAttemptResponseDto,
    );

    return response;
  }
}
