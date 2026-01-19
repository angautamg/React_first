
export const rateLimiter = async (req, res, next) => {
  const limit = 5; // requests
  const window = 60; // seconds

  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, window);
  }

  if (current > limit) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  next();
};
