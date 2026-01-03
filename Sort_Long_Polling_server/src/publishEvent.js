// publishEvent.js
import { publisher } from './redis.js';

export function publishNotification(payload) {
  publisher.publish('notifications', JSON.stringify(payload));
}
