import { Module } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { ThoughtController } from './thought.controller';
import { Thought, ThoughtSchema } from 'src/schemas/thought.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Thought.name, schema: ThoughtSchema }]),
  ],
  providers: [ThoughtService],
  controllers: [ThoughtController],
})
export class ThoughtModule {}
