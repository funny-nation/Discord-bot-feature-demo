import winston, { format } from 'winston'
import timestamp = format.timestamp;

const myFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level}: ${message}`
})

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    winston.format.colorize({
      all: true
    }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: []
})

switch (process.env.NODE_ENV) {
  case undefined:
    logger.add(new winston.transports.Console({ level: 'verbose' }))
    break
  case 'production':
    logger.add(new winston.transports.Console())
}

export default logger
