import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  getHello(): string {
    this.logger.warn('getHello is triggered!');
    return 'Hello World!';
  }
}
