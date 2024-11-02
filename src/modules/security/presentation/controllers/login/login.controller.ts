import { LoginRequestDto } from '@app/modules/security/domain/login/login-request.dto';
import { LoginResponseDto } from '@app/modules/security/domain/login/login-response.dto';
import { LoginUser } from '@app/modules/security/services/useCases/login/loginUser.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * User controller
 */
@Controller('login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly _login: LoginUser) {}

  /**
   * Iniciar sesión
   * @returns
   */
  @Post()
  login(@Body() loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    return this._login.handle(loginRequest);
  }
}
