import { UserRoleRequestDto } from '@app/modules/security/domain/userRole/dto/userRole-request.dto';
import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new userRole.
 */
@Injectable()
export class CreateUserRole {
  /**
   * Creates an instance of the CreateUserRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRoleRepository - The repository for managing UserRole entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRoleRepository: UserRoleRepository,
  ) {}

  /**
   * Handles the creation of a new userRole.
   *
   * @param createUserRoleDto - The data transfer object containing the userRole details.
   * @returns The response containing the created userRole.
   */
  async handle(
    userRoleRequestDto: UserRoleRequestDto,
  ): Promise<UserRoleResponseDto> {
    const userRolePayload = this._mapper.map(
      userRoleRequestDto,
      UserRoleRequestDto,
      UserRole,
    );

    const userRole = await this._userRoleRepository.create(userRolePayload);

    const response = this._mapper.map(userRole, UserRole, UserRoleResponseDto);

    return response;
  }
}
