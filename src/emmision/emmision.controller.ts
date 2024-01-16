import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmissionService } from './emmision.service';
import { createEmissionDto } from 'src/dto/emmision/create-emmision.dto';

@Controller('emmision')
export class EmmisionController {
  constructor(private emissionService: EmissionService) { }

  @Post()
  create(@Body() emission: createEmissionDto) {
    return this.emissionService.addEmmision(emission)
  }

  @Get()
  async findAll() {
    return this.emissionService.getAllEmmision();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emissionService.getEmmision(id);
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updateData) {
  //   return this.emissionService.update(+id, updateData);
  // }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.emissionService.deleteEmmision(id);
  }

}
