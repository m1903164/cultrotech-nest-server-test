import * as mongoose from "mongoose"
import * as bcrypt from 'bcryptjs'

import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common"
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService
  ){}

  async signUp(signUpDto: SignUpDto): Promise<{user: User, token: string}> {
    const { name, email, password, role } = signUpDto
    
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      role
    })

    const token  = this.jwtService.sign({ id: user._id })

    return { token, user }
  }

  async login(loginDto: LoginDto): Promise<{ user: User, token: string }> {
    const { email, password } = loginDto

    const user = await this.userModel.findOne({email})
    if(!user) {
      throw new UnauthorizedException('Некорректный email или пароль')
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if(!isPasswordMatched) {
      throw new UnauthorizedException('Некорректный email или пароль')
    }

    const token  = this.jwtService.sign({ id: user._id })

    return { token, user }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async findById(id: string): Promise<User> {
    const res = await this.userModel.findById(id)

    if(!res) {
      throw new NotFoundException('User not found')
    }

    return res
  }

  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id)
  }
}
