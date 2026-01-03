// longPollManager.js
const clients = new Map();

export function addClient(clientId, res) {
  clients.set(clientId, res);
}

export function removeClient(clientId) {
  clients.delete(clientId);
}

export function notifyClients(data) {
  for (const [clientId, res] of clients.entries()) {
    res.json(data);
    clients.delete(clientId);
  }
}
