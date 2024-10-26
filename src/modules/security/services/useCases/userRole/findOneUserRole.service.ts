import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a userRole by its ID.
 */
@Injectable()
export class FindOneUserRole {
  /**
   * Constructs a new instance of the FindOneUserRoleService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRoleRepository - The repository for accessing userRole data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRoleRepository: UserRoleRepository,
  ) {}

  /**
   * Retrieves a userRole by its ID.
   *
   * @param id - The ID of the userRole to retrieve.
   * @returns A Promise that resolves to a UserRoleResponseDto object representing the retrieved userRole.
   */
  async handle(id: number): Promise<UserRoleResponseDto> {
    const userRole = await this._userRoleRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(userRole, UserRole, UserRoleResponseDto);

    return response;
  }
}
