import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';
const key = 'rate_limiter';
const redisClient = new Redis();
export const rateLimiter = async (req, res, next) => {
  const limit = 5; // requests
  const window = 60; // seconds

  const current = await redisClient.incr(key);

  if (current === 1) {
    await redisClient.expire(key, window);
  }

  if (current > limit) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  next();
};