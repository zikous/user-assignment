import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const admin = await this.authService.validateAdmin(body.username, body.password);

    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authService.login(admin);
  }
}