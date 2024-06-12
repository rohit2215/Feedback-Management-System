import { NestMiddleware } from '@nestjs/common';
export declare class RateLimiterMiddleware implements NestMiddleware {
    private requests;
    private options;
    constructor();
    use(req: any, res: any, next: () => void): void;
}
