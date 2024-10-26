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
import { RoleRequestDto } from '@app/modules/security/domain/role/dto/role-request.dto';
import { RoleUpdateDto } from '@app/modules/security/domain/role/dto/role-update.dto';
import { CreateRole } from '@app/modules/security/services/useCases/role/createRole.service';
import { FindAllRole } from '@app/modules/security/services/useCases/role/findAllRole.service';
import { FindOneRole } from '@app/modules/security/services/useCases/role/findOneRole.service';
import { UpdateRole } from '@app/modules/security/services/useCases/role/updateRole.service';
import { DeleteRole } from '@app/modules/security/services/useCases/role/deleteRole.service';

/**
 * Role controller
 */
@Controller('roles')
@ApiTags('Roles')
export class RoleController {
  constructor(
    private readonly _createRole: CreateRole,
    private readonly _findAllRole: FindAllRole,
    private readonly _findOneRole: FindOneRole,
    private readonly _updateRole: UpdateRole,
    private readonly _deleteRole: DeleteRole,
  ) {}

  /**
   * Create a new role
   * @param createRoleDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createRoleDto: RoleRequestDto) {
    return this._createRole.handle(createRoleDto);
  }

  /**
   * Get all roles
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllRole.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneRole.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateRoleDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updateRoleDto: RoleUpdateDto) {
    return this._updateRole.handle(+id, updateRoleDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteRole.handle(+id);
  }
}
