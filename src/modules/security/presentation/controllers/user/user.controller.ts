import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';
import { CreateUser } from '@app/modules/security/services/useCases/user/createUser.service';
import { DeleteUser } from '@app/modules/security/services/useCases/user/deleteUser.service';
import { FindAllUser } from '@app/modules/security/services/useCases/user/findAllUser.service';
import { FindOneUser } from '@app/modules/security/services/useCases/user/findOneUser.service';
import { UpdateUser } from '@app/modules/security/services/useCases/user/updateUser.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

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
   * Delete todo
   * @param id
   * @returns
   */
  @Put('delete')
  @UseInterceptors(TransactionInterceptor)
  delete(@Body() request: { id: number; state: boolean }) {
    return this._deleteUser.handle(request?.id, request?.state);
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
}
