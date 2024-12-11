import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';
import { FindOneUser } from '@app/modules/security/services/useCases/user/findOneUser.service';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { constructorName } from '@app/modules/common/utils';

/**
 * Service class for updating a user.
 */
@Injectable()
export class UpdateUser {
  /**
   * Constructs a new instance of the UpdateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for accessing user data.
   * @param _findOneUser - The use case for finding a single user.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _findOneUser: FindOneUser,
    private readonly _userRepository: UserRepository,
    private readonly _personRepository: PersonRepository,
    private readonly _userRoleRepository: UserRoleRepository,
    private readonly _companyPersonRepository: CompanyPersonRepository,
  ) {}

  /**
   * Handles the update of a user item.
   *
   * @param id - The ID of the user item to update.
   * @param userUpdateDto - The data to update the user item with.
   * @returns The updated user item.
   * @throws NotFoundException if the user item with the specified ID is not found.
   */
  async handle(
    id: number,
    userUpdateDto: UserUpdateDto,
  ): Promise<UserResponseDto> {
    const exist = await this._findOneUser.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Usuario no encontrado`);
    }

    const userUpdatePayload = this._mapper.map(
      userUpdateDto,
      UserUpdateDto,
      User,
    );

    const user = await this._userRepository.update(id, {
      ...userUpdatePayload,
      userName: userUpdateDto?.userName,
      email: userUpdateDto?.email,
      password: exist?.password,
      state: exist?.state,
      failedAttempts: exist?.failedAttempts,
    });

    await this._personRepository.update(exist?.persons?.id, {
      id: exist?.persons?.id,
      idIdentificationType: userUpdateDto?.idIdentificationType,
      idCargo: userUpdateDto?.idCargo,
      idUser: user?.id,
      documentNumber: userUpdateDto?.documentNumber,
      firstName: userUpdateDto?.firstName,
      middleName: userUpdateDto?.middleName,
      firstLastName: userUpdateDto?.firstLastName,
      middleLastName: userUpdateDto?.middleLastName,
      fullName: constructorName([
        userUpdateDto?.firstName,
        userUpdateDto?.middleName,
        userUpdateDto?.firstLastName,
        userUpdateDto?.middleLastName,
      ]),
      dateBirth: userUpdateDto?.dateBirth,
      phone: userUpdateDto?.phone,
      email: userUpdateDto?.email,
      state: exist?.persons?.state,
    });

    await this._userRoleRepository.update(exist?.userRole?.[0]?.id, {
      id: exist?.userRole?.[0]?.id,
      idUser: exist?.userRole?.[0]?.idUser,
      idRole: userUpdateDto?.idRol,
      assignDate: exist?.userRole?.[0]?.assignDate,
    });

    await this._companyPersonRepository.update(
      exist?.persons?.companyPerson?.[0]?.id,
      {
        id: exist?.persons?.companyPerson?.[0]?.id,
        idCompany: userUpdateDto?.idCompany,
        idPerson: exist?.persons?.companyPerson?.[0]?.idPerson,
      },
    );

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
