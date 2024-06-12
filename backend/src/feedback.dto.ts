import { IsString, Length } from 'class-validator';

export class FeedbackDto {
  @IsString()
  @Length(1, 255)
  name: string;

  @IsString()
  @Length(1, 1000)
  feedback: string;
}
