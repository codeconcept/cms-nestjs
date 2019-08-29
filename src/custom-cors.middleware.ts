import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CustomCorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // tslint:disable-next-line: no-console
    console.log('yeah, you entered CustomCorsMiddleware');
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  }
}
