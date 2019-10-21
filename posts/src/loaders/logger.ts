// logger loader
import pino from 'pino'

export class Logger {
  message: string
  logger: pino.Logger

  constructor(message: string) {
    this.message = message
    this.logger = pino()
  }

  info() {
    this.logger.info(this.message)
  }

  error() {
    this.logger.error(this.message)
  }
}
