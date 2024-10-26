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
import { UserRoleRequestDto } from '@app/modules/security/domain/userRole/dto/userRole-request.dto';
import { UserRoleUpdateDto } from '@app/modules/security/domain/userRole/dto/userRole-update.dto';
import { CreateUserRole } from '@app/modules/security/services/useCases/userRole/createUserRole.service';
import { FindAllUserRole } from '@app/modules/security/services/useCases/userRole/findAllUserRole.service';
import { FindOneUserRole } from '@app/modules/security/services/useCases/userRole/findOneUserRole.service';
import { UpdateUserRole } from '@app/modules/security/services/useCases/userRole/updateUserRole.service';
import { DeleteUserRole } from '@app/modules/security/services/useCases/userRole/deleteUserRole.service';

/**
 * UserRole controller
 */
@Controller('userRoles')
@ApiTags('UserRoles')
export class UserRoleController {
  constructor(
    private readonly _createUserRole: CreateUserRole,
    private readonly _findAllUserRole: FindAllUserRole,
    private readonly _findOneUserRole: FindOneUserRole,
    private readonly _updateUserRole: UpdateUserRole,
    private readonly _deleteUserRole: DeleteUserRole,
  ) {}

  /**
   * Create a new userRole
   * @param createUserRoleDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createUserRoleDto: UserRoleRequestDto) {
    return this._createUserRole.handle(createUserRoleDto);
  }

  /**
   * Get all userRoles
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllUserRole.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneUserRole.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateUserRoleDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateUserRoleDto: UserRoleUpdateDto,
  ) {
    return this._updateUserRole.handle(+id, updateUserRoleDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteUserRole.handle(+id);
  }
}
