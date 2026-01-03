// subscriber.js
import { subscriber } from './redis.js';
import { notifyClients } from './longPollManager.js';

subscriber.subscribe('notifications');

subscriber.on('message', (_, message) => {
  const data = JSON.parse(message);
  notifyClients(data);
});
