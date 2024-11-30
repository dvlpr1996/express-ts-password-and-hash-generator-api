import rateLimit from 'express-rate-limit';

const rateLimitConfig = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS ? parseInt(process.env.RATE_LIMIT_WINDOW_MS) : 1 * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX_REQUESTS ? parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) : 3,
  statusCode: 429,
  message: {
    status: 429,
    error: 'Too Many Requests',
    message: 'Too many requests, please try again later.',
  },
  legacyHeaders: false, // Disable X-RateLimit-* headers for cleaner responses
  validate: true, // Enable validation to ensure options are correctly set
  standardHeaders: 'draft-7', // Enable draft-7 RateLimit headers for modern clients
  passOnStoreError: false, // Block traffic if the store becomes unavailable
  skip: (req) => false, // Customize this based on your needs
  skipSuccessfulRequests: true, // Only count requests that result in errors
  skipFailedRequests: false, // Count failed requests, as they may indicate brute-force attempts
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests, please try again later.' });
  },
});

export default rateLimitConfig;
