const rapid = require('../src/rapid/routes');

module.exports = (app) => {
  app.use('/rapid', rapid);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
