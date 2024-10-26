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
import { LoginAttemptRequestDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-request.dto';
import { LoginAttemptUpdateDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-update.dto';
import { CreateLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/createLoginAttempt.service';
import { FindAllLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/findAllLoginAttempt.service';
import { FindOneLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/findOneLoginAttempt.service';
import { UpdateLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/updateLoginAttempt.service';
import { DeleteLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/deleteLoginAttempt.service';

/**
 * LoginAttempt controller
 */
@Controller('loginAttempts')
@ApiTags('LoginAttempts')
export class LoginAttemptController {
  constructor(
    private readonly _createLoginAttempt: CreateLoginAttempt,
    private readonly _findAllLoginAttempt: FindAllLoginAttempt,
    private readonly _findOneLoginAttempt: FindOneLoginAttempt,
    private readonly _updateLoginAttempt: UpdateLoginAttempt,
    private readonly _deleteLoginAttempt: DeleteLoginAttempt,
  ) {}

  /**
   * Create a new loginAttempt
   * @param createLoginAttemptDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createLoginAttemptDto: LoginAttemptRequestDto) {
    return this._createLoginAttempt.handle(createLoginAttemptDto);
  }

  /**
   * Get all loginAttempts
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllLoginAttempt.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneLoginAttempt.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateLoginAttemptDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateLoginAttemptDto: LoginAttemptUpdateDto,
  ) {
    return this._updateLoginAttempt.handle(+id, updateLoginAttemptDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteLoginAttempt.handle(+id);
  }
}
