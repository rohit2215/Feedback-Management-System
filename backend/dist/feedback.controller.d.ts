import { FeedbackDto } from './feedback.dto';
import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    getAllFeedback(): FeedbackDto[];
    submitFeedback(feedbackDto: FeedbackDto): FeedbackDto;
}
