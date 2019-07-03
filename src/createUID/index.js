const createUID = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';

  for (let i = 0; i < 20; i += 1) {
    autoId += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return autoId;
};

module.exports = createUID;
