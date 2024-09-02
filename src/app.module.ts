import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnifeModule } from './knife/knife.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    KnifeModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
