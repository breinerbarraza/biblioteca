import { LoginRequestDto } from '@app/modules/security/domain/login/login-request.dto';
import { LoginResponseDto } from '@app/modules/security/domain/login/login-response.dto';
import { LoginUser } from '@app/modules/security/services/useCases/login/loginUser.service';
import { RefreshToken } from '@app/modules/security/services/useCases/login/refreshToken.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * User controller
 */
@Controller('login')
@ApiTags('Login')
export class LoginController {
  constructor(
    private readonly _login: LoginUser,
    private readonly _refreshToken: RefreshToken,
  ) {}

  /**
   * refresh Token
   * @returns
   */
  @Get('/refreshToken/:token')
  refreshToken(@Param('token') token: string): Promise<{ token: string }> {
    return this._refreshToken.handle(token);
  }

  /**
   * Iniciar sesión
   * @returns
   */
  @Post()
  login(@Body() loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    return this._login.handle(loginRequest);
  }
}
