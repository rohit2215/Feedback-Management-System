import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { FeedbackModule } from './feedback.module';
import { RateLimiterMiddleware } from './rate-limiter.middleware';

@Module({
  imports: [FeedbackModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimiterMiddleware)
      .forRoutes({ path: 'feedback', method: RequestMethod.ALL });
  }
}
