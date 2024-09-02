import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  SignUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto)
  }

  @Post('/login')
  Login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto)
  }

  @Get('/users')
  async getAllUsers(): Promise<User[]> {
    return this.authService.findAll()
  }

  @Get('/user/:id')
  async getUserById(
    @Param('id')
    id: string
  ): Promise<User> {
    return this.authService.findById(id)
  }
}

