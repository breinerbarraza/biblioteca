import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { UserRoleUpdateDto } from '@app/modules/security/domain/userRole/dto/userRole-update.dto';
import { FindOneUserRole } from '@app/modules/security/services/useCases/userRole/findOneUserRole.service';

/**
 * Service class for updating a userRole.
 */
@Injectable()
export class UpdateUserRole {
  /**
   * Constructs a new instance of the UpdateUserRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRoleRepository - The repository for accessing userRole data.
   * @param _findOneUserRole - The use case for finding a single userRole.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRoleRepository: UserRoleRepository,
    private readonly _findOneUserRole: FindOneUserRole,
  ) {}

  /**
   * Handles the update of a userRole item.
   *
   * @param id - The ID of the userRole item to update.
   * @param userRoleUpdateDto - The data to update the userRole item with.
   * @returns The updated userRole item.
   * @throws NotFoundException if the userRole item with the specified ID is not found.
   */
  async handle(
    id: number,
    userRoleUpdateDto: UserRoleUpdateDto,
  ): Promise<UserRoleResponseDto> {
    const exist = await this._findOneUserRole.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`UserRole with id ${id} not found`);
    }

    const userRoleUpdatePayload = this._mapper.map(
      userRoleUpdateDto,
      UserRoleUpdateDto,
      UserRole,
    );

    const userRole = await this._userRoleRepository.update(
      id,
      userRoleUpdatePayload,
    );

    const response = this._mapper.map(userRole, UserRole, UserRoleResponseDto);

    return response;
  }
}
