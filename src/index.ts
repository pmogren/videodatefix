import dotenv = require('dotenv-safe');
import winston = require('winston');
dotenv.config({ allowEmptyValues: false });

const logConfiguration = {
  transports: [new winston.transports.Console()],
};

const logger = winston.createLogger(logConfiguration);
logger.info('Winston logger initialized');
