import { FeedbackDto } from './feedback.dto';
export declare class FeedbackService {
    private feedbackEntries;
    getAllFeedback(): FeedbackDto[];
    submitFeedback(feedback: FeedbackDto): FeedbackDto;
}
