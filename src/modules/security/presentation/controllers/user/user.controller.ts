import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { CreateUser } from '@app/modules/security/services/user/createUser.service';
import { FindAllUser } from '@app/modules/security/services/user/findAllUser.service';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';
import { FindOneUser } from '@app/modules/security/services/user/findOneUser.service';
import { UpdateUser } from '@app/modules/security/services/user/updateUser.service';
import { DeleteUser } from '@app/modules/security/services/user/deleteUser.service';

/**
 * User controller
 */
@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly _createUser: CreateUser,
    private readonly _findAllUser: FindAllUser,
    private readonly _findOneUser: FindOneUser,
    private readonly _updateUser: UpdateUser,
    private readonly _deleteUser: DeleteUser,
  ) {}

  /**
   * Create a new user
   * @param createUserDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createUserDto: UserRequestDto) {
    return this._createUser.handle(createUserDto);
  }

  /**
   * Get all users
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllUser.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneUser.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateUserDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDto) {
    return this._updateUser.handle(+id, updateUserDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteUser.handle(+id);
  }
}
