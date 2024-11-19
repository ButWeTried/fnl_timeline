import { PartialType } from '@nestjs/mapped-types';
import { CreateThoughtDto } from './create-thought';

export class UpdateThoughtDto extends PartialType(CreateThoughtDto) {}
