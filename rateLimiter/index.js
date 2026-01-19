import express from 'express';
//import { rateLimiter } from './ratelLimiter.js'; 
import rateLimit from 'express-rate-limit';

import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';
const app = express();
const redisClient = new Redis();
const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
    }),
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests, please try again later.',
});
//app.use(limiter);
app.get('/', limiter, (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});