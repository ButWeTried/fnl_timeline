import { Module } from '@nestjs/common';
import { ThoughtModule } from './thought/thought.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    SwaggerModule,
    ThoughtModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
