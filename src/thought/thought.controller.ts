import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateThoughtDto } from './dto/create-thought';
import { UpdateThoughtDto } from './dto/update-thought';
import { ThoughtService } from './thought.service';

@Controller('thought')
export class ThoughtController {
  constructor(private readonly thoughtService: ThoughtService) {}

  @Post()
  create(@Body() createThoughtDto: CreateThoughtDto) {
    return this.thoughtService.create(createThoughtDto);
  }

  @Get()
  findAll() {
    return this.thoughtService.findAll();
  }

  @Get(':id')
  findOne(id: string) {
    return this.thoughtService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThoughtDto: UpdateThoughtDto) {
    return this.thoughtService.update(id, updateThoughtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thoughtService.remove(id);
  }
}
