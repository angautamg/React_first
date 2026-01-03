
import express from 'express';
import { addClient, removeClient } from './longPollManager.js';

const router = express.Router();

router.get('/poll', (req, res) => {
  const clientId = crypto.randomUUID();

  req.on('close', () => {
    removeClient(clientId);
  });

  addClient(clientId, res);

  // Timeout to avoid infinite connection
  setTimeout(() => {
    if (!res.headersSent) {
      res.json([]);
      removeClient(clientId);
    }
  }, 30000);
});

export default router;