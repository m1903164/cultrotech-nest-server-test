import { Module } from '@nestjs/common';
import { KnifeController } from './knife.controller';
import { KnifeService } from './knife.service';
import { MongooseModule } from '@nestjs/mongoose';
import { KnifeSchema } from './schemas/knife.schemas';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Knife', schema: KnifeSchema }])],
  controllers: [KnifeController],
  providers: [KnifeService]
})
export class KnifeModule {}
