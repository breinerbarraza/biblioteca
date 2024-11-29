import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';
import { Injectable } from '@nestjs/common';
import { EmailCreatePassword } from './emailCreatePassword.service';

/**
 * Service class for email.
 */
@Injectable()
export class EmailMassiveCreatePassword {
  /**
   * Constructs a new instance of the `LoginUser` class.
   * @param _emailAdapter - The repository for accessing todo data.
   */
  constructor(private readonly _emailAdapter: EmailCreatePassword) {}

  /**
   * Handles the login of user.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  async handle(userUpdate: UserUpdateDto[]): Promise<string[]> {
    let messages: string[] = [];
    for (const element of userUpdate) {
      const email = await this._emailAdapter.handle(element?.email);

      messages = [...messages, email];
    }

    return messages;
  }
}
