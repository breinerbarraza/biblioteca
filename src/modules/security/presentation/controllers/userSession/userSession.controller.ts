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
import { UserSessionRequestDto } from '@app/modules/security/domain/userSession/dto/userSession-request.dto';
import { CreateUserSession } from '@app/modules/security/services/userSession/createUserSession.service';
import { FindAllUserSession } from '@app/modules/security/services/userSession/findAllUserSession.service';
import { UserSessionUpdateDto } from '@app/modules/security/domain/userSession/dto/userSession-update.dto';
import { FindOneUserSession } from '@app/modules/security/services/userSession/findOneUserSession.service';
import { UpdateUserSession } from '@app/modules/security/services/userSession/updateUserSession.service';
import { DeleteUserSession } from '@app/modules/security/services/userSession/deleteUserSession.service';

/**
 * UserSession controller
 */
@Controller('userSessions')
@ApiTags('UserSessions')
export class UserSessionController {
  constructor(
    private readonly _createUserSession: CreateUserSession,
    private readonly _findAllUserSession: FindAllUserSession,
    private readonly _findOneUserSession: FindOneUserSession,
    private readonly _updateUserSession: UpdateUserSession,
    private readonly _deleteUserSession: DeleteUserSession,
  ) {}

  /**
   * Create a new userSession
   * @param createUserSessionDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createUserSessionDto: UserSessionRequestDto) {
    return this._createUserSession.handle(createUserSessionDto);
  }

  /**
   * Get all userSessions
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllUserSession.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneUserSession.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateUserSessionDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateUserSessionDto: UserSessionUpdateDto,
  ) {
    return this._updateUserSession.handle(+id, updateUserSessionDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteUserSession.handle(+id);
  }
}
