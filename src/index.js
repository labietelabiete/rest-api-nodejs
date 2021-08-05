const app = require('./server');
const { config } = require('./config/config');
const connect = require('./db/connect');

app.listen(config.app.port, () => {
  console.log(`Server running at port ${config.app.port}`)
})