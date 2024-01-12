import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello test Get';
  }
  getPost():string {
    
    return "Hello test Post "
  }
}
