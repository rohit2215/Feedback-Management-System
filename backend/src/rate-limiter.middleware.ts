import { Injectable, NestMiddleware } from '@nestjs/common';

interface RateLimitOptions {
  windowMs: number; // Time frame in milliseconds
  max: number; // Max number of requests
}

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  private requests: { [key: string]: number[] } = {};
  private options: RateLimitOptions;

  constructor() {
    this.options = { windowMs: 10000, max: 1 }; // Default options
  }

  use(req: any, res: any, next: () => void) {
    const key = req.ip;
    const currentTime = Date.now();
    
    if (!this.requests[key]) {
      this.requests[key] = [];
    }

    // Remove outdated requests
    this.requests[key] = this.requests[key].filter(
      timestamp => currentTime - timestamp < this.options.windowMs
    );

    // Check if limit exceeded
    if (this.requests[key].length >= this.options.max) {
      res.status(429).json({
        message: 'Too many requests, please try again later.',
      });
    } else {
      this.requests[key].push(currentTime);
      next();
    }
  }
}
