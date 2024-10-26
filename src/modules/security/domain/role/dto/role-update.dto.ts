import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a role update dto.
 */
export class RoleUpdateDto {
  /**
   * Role name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  name: string;

  /**
   * Role description
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  description: string;

  /**
   * Role state
   */
  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state: boolean;
}
