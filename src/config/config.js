const dotenv = require('dotenv');

dotenv.config()
// Con esto podemos leer el archivo .env

// Destructuring from .env
const {
  NODE_ENV = 'development',
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  ACCESS_TOKEN_SECRET,
  PORT,
  ENCRYPTION_SALT_DEVELOPMENT,
  ENCRYPTION_SALT_PRODUCTION,
} = process.env;


const CONFIG = {
  production: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION
    },
    encrypt: {
      salt: ENCRYPTION_SALT_PRODUCTION
    }
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT
    },
    encrypt: {
      salt: ENCRYPTION_SALT_DEVELOPMENT
    }
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST
    }
  }
};

// Exporting our config file, using NODE_ENV = "development" by default
module.exports = {
  config: CONFIG[NODE_ENV],
}