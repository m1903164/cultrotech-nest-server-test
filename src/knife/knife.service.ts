import * as mongoose from "mongoose";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Knife } from './schemas/knife.schemas';

@Injectable()
export class KnifeService {
  constructor(
    @InjectModel(Knife.name)
    private knifeModel: mongoose.Model<Knife>
  ){}

  async findAll(): Promise<Knife[]> {
    const knives = await this.knifeModel.find()
    return knives
  }

  async findById(id: string): Promise<Knife> {
    const res = await this.knifeModel.findById(id)

    if(!res) {
      throw  new NotFoundException('Knife not found')
    }

    return res
  }

  async create(knife: Knife): Promise<Knife> {
    const res = await this.knifeModel.create(knife)
    return res
  }

  async updateById(id: string, knife: Knife): Promise<Knife> {
    return await this.knifeModel.findByIdAndUpdate(id, knife, {
      new: true,
      runValidators: true
    })
  }

  async deleteById(id: string): Promise<Knife> {
    return await this.knifeModel.findByIdAndDelete(id)
  }
}
