import { Injectable } from '@nestjs/common';
import { FeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
  private feedbackEntries: FeedbackDto[] = [];

  getAllFeedback(): FeedbackDto[] {
    return this.feedbackEntries;
  }

  submitFeedback(feedback: FeedbackDto): FeedbackDto {
    this.feedbackEntries.push(feedback);
    return feedback;
  }
}
