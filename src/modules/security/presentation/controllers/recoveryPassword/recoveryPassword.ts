// import { RecoveryPasswordRequestDto } from '@app/modules/security/domain/recoveryPassword/dto/recovery-password-request.dto';
import { AuthGuard } from '@app/modules/common/guards/authGuard.guard';
import { RecoveryPasswordRequestDto } from '@app/modules/security/domain/recoveryPassword/recovery-password-request.dto';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';
import { EmailMassiveCreatePassword } from '@app/modules/security/services/useCases/recoveryPassword/emailMassiveCreatePassword.service';
import { EmailRecoveryPassword } from '@app/modules/security/services/useCases/recoveryPassword/emailRecoveryPassword.service';
import { RecoveryPassword } from '@app/modules/security/services/useCases/recoveryPassword/recoveryPassword.service';
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/**
 * User controller
 */
@Controller('recoveryPassword')
@ApiTags('Recovery Password')
export class RecoveryPasswordController {
  constructor(
    private readonly _emailRecoveryPassword: EmailRecoveryPassword,
    private readonly _recoveryPassword: RecoveryPassword,
    private readonly _emailMassiveCreatePassword: EmailMassiveCreatePassword,
  ) {}

  /**
   * Email para recuperar contraseña
   * @returns
   */
  @Post('sendEmail/:email')
  emailRecoveryPassword(@Param('email') email: string): Promise<string> {
    return this._emailRecoveryPassword.handle(email);
  }

  /**
   * Email para crear contraseña
   * @returns
   */
  @Post('sendEmailMassive')
  createMassiveEmail(@Body() userUpdate: UserUpdateDto[]): Promise<string[]> {
    return this._emailMassiveCreatePassword.handle(userUpdate);
  }

  /**
   * Restablecer contraseña
   * @returns
   */
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  recoveryPassword(
    @Body() request: RecoveryPasswordRequestDto,
  ): Promise<UserResponseDto> {
    return this._recoveryPassword.handle(request);
  }
}
