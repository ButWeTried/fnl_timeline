import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Thought, ThoughtDocument } from 'src/schemas/thought.schema';
import { CreateThoughtDto } from './dto/create-thought';
import { UpdateThoughtDto } from './dto/update-thought';

@Injectable()
export class ThoughtService {
  constructor(
    @InjectModel(Thought.name)
    private readonly thoughtModel: Model<ThoughtDocument>,
  ) {}

  async create(createThoughtDto: CreateThoughtDto): Promise<Thought> {
    const createdThought = new this.thoughtModel(createThoughtDto);
    return await createdThought.save();
  }

  async findAll(): Promise<ThoughtDocument[]> {
    return await this.thoughtModel.find();
  }

  async findOne(id: string): Promise<ThoughtDocument> {
    return await this.thoughtModel.findById(id);
  }

  async update(
    id: string,
    thought: UpdateThoughtDto,
  ): Promise<ThoughtDocument> {
    return await this.thoughtModel.findByIdAndUpdate(id, thought, {
      new: true,
    });
  }

  async remove(id: string): Promise<ThoughtDocument> {
    return await this.thoughtModel.findByIdAndDelete(id);
  }
}
