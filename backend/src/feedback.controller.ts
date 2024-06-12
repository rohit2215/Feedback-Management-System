import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { FeedbackDto } from './feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAllFeedback(): FeedbackDto[] {
    return this.feedbackService.getAllFeedback();
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  submitFeedback(@Body() feedbackDto: FeedbackDto): FeedbackDto {
    return this.feedbackService.submitFeedback(feedbackDto);
  }
}
