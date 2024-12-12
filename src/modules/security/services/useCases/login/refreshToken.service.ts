import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshToken {
  constructor(private readonly jwt: JwtService) {}

  async handle(token: string): Promise<{ token: string }> {
    const user = await this.jwt.verifyAsync(token).catch(() => {
      throw new NotFoundException('Invalid token');
    });

    if (!user?.id) {
      throw new BadRequestException(
        'Ocurrió una incidencia con datos dentro el token',
        {
          cause: new Error(),
        },
      );
    }

    const payload = {
      correo: user?.email,
      id: user?.id,
      idCompany: user?.idCompany,
    };

    return {
      token: this.jwt.sign(payload, {
        expiresIn: '4h',
      }),
    };
  }
}
