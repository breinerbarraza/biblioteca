import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
/**
 * A class representing a role request dto.
 */
export class RoleRequestDto {
  /**
   * Role name
   */
  @IsString()
  @AutoMap()
  name: string;

  /**
   * Role description
   */
  @IsString()
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
