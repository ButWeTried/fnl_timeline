import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateThoughtDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ type: String })
  @IsString()
  image: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  private: boolean;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  owner: string;

  @ApiProperty({ type: Array<string> })
  @IsNotEmpty()
  @IsArray()
  comments: string[];
}
