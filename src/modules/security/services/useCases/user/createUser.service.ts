import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { EmailAdapter } from '@app/modules/common/adapters/email/emailAdapter.service';
import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

/**
 * Service class for creating a new user.
 */
@Injectable()
export class CreateUser {
  /**
   * Creates an instance of the CreateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for managing User entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
    private readonly _personRepository: PersonRepository,
    private readonly _userRoleRepository: UserRoleRepository,
    private readonly _companyPersonRepository: CompanyPersonRepository,
    private readonly _emailAdapter: EmailAdapter,
  ) {}

  /**
   * Handles the creation of a new user.
   *
   * @param createUserDto - The data transfer object containing the user details.
   * @returns The response containing the created user.
   */
  async handle(userRequestDto: UserRequestDto): Promise<UserResponseDto> {
    const userPayload = this._mapper.map(userRequestDto, UserRequestDto, User);

    const password = await bcrypt.hash(userRequestDto?.documentNumber, 10);

    const user = await this._userRepository.create({
      id: undefined,
      userName: userPayload?.userName,
      email: userPayload?.email,
      password,
      state: undefined,
      failedAttempts: 0,
    });

    if (user?.id) {
      const person = await this._personRepository.create({
        id: undefined,
        idIdentificationType: userRequestDto?.idIdentificationType,
        idCargo: userRequestDto?.idCargo,
        idUser: user?.id,
        documentNumber: userRequestDto?.documentNumber,
        firstName: userRequestDto?.firstName,
        middleName: userRequestDto?.middleName,
        firstLastName: userRequestDto?.firstLastName,
        middleLastName: userRequestDto?.middleLastName,
        dateBirth: userRequestDto?.dateBirth,
        phone: userRequestDto?.phone,
        email: userRequestDto?.email,
        state: undefined,
      });

      await this._userRoleRepository.create({
        id: undefined,
        idUser: user?.id,
        idRole: userRequestDto?.idRol,
        assignDate: undefined,
      });

      await this._emailAdapter.sendEmail({
        from: 'Aris - Contraseña de acceso <contactoaris00@gmail.com>',
        subject: 'Aris - Contraseña de acceso',
        to: userRequestDto?.email?.toLocaleLowerCase(),
        html: '<p>Tu contraseña de acceso es tu número de identificación</p>',
      });

      if (person?.id) {
        await this._companyPersonRepository.create({
          id: undefined,
          idCompany: userRequestDto?.idCompany,
          idPerson: person?.id,
        });
      }
    }

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
