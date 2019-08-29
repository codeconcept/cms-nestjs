import { CustomCorsMiddleware } from './custom-cors.middleware';

describe('CustomCorsMiddleware', () => {
  it('should be defined', () => {
    expect(new CustomCorsMiddleware()).toBeDefined();
  });
});
