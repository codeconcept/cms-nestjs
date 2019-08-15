import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    // As we use the JWT guard on this method,
    // we need to pass a header containing 'Bearer the_corresponding_jwt_token_passed_on_successful_login'
    // when making a GET request to http://localhost:3000/api/me
    return req.user;
  }
}
