"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiterMiddleware = void 0;
const common_1 = require("@nestjs/common");
let RateLimiterMiddleware = class RateLimiterMiddleware {
    constructor() {
        this.requests = {};
        this.options = { windowMs: 10000, max: 1 };
    }
    use(req, res, next) {
        const key = req.ip;
        const currentTime = Date.now();
        if (!this.requests[key]) {
            this.requests[key] = [];
        }
        this.requests[key] = this.requests[key].filter(timestamp => currentTime - timestamp < this.options.windowMs);
        if (this.requests[key].length >= this.options.max) {
            res.status(429).json({
                message: 'Too many requests, please try again later.',
            });
        }
        else {
            this.requests[key].push(currentTime);
            next();
        }
    }
};
exports.RateLimiterMiddleware = RateLimiterMiddleware;
exports.RateLimiterMiddleware = RateLimiterMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RateLimiterMiddleware);
//# sourceMappingURL=rate-limiter.middleware.js.map