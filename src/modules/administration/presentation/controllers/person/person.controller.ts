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
import { PersonRequestDto } from '@app/modules/administration/domain/person/dto/person-request.dto';
import { PersonUpdateDto } from '@app/modules/administration/domain/person/dto/person-update.dto';
import { CreatePerson } from '@app/modules/administration/services/useCases/person/createPerson.service';
import { FindAllPerson } from '@app/modules/administration/services/useCases/person/findAllPerson.service';
import { FindOnePerson } from '@app/modules/administration/services/useCases/person/findOnePerson.service';
import { UpdatePerson } from '@app/modules/administration/services/useCases/person/updatePerson.service';
import { DeletePerson } from '@app/modules/administration/services/useCases/person/deletePerson.service';

/**
 * Person controller
 */
@Controller('persons')
@ApiTags('Persons')
export class PersonController {
  constructor(
    private readonly _createPerson: CreatePerson,
    private readonly _findAllPerson: FindAllPerson,
    private readonly _findOnePerson: FindOnePerson,
    private readonly _updatePerson: UpdatePerson,
    private readonly _deletePerson: DeletePerson,
  ) {}

  /**
   * Create a new person
   * @param createPersonDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createPersonDto: PersonRequestDto) {
    return this._createPerson.handle(createPersonDto);
  }

  /**
   * Get all persons
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllPerson.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOnePerson.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updatePersonDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updatePersonDto: PersonUpdateDto) {
    return this._updatePerson.handle(+id, updatePersonDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deletePerson.handle(+id);
  }
}
