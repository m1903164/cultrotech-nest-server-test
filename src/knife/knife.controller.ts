import { Body, Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { KnifeService } from "./knife.service";
import { Knife } from "./schemas/knife.schemas";
import { CreateKnifeDto } from "./dto/create-knife.dto";
import { UpdateKnifeDto } from "./dto/update-knife.dto";

@Controller('knife')
export class KnifeController {
  constructor(private knifeService: KnifeService) {}

  @Get()
  async getAllKnives(): Promise<Knife[]> {
    return this.knifeService.findAll()
  }

  @Get(':id')
  async getKnifeById(
    @Param('id')
    id: string
  ): Promise<Knife> {
    return this.knifeService.findById(id)
  }

  @Post()
  async createKnife(
    @Body()
    knife: CreateKnifeDto,
  ): Promise<Knife> {
    return this.knifeService.create(knife)
  }

  @Put(':id')
  async updateKnife(
    @Param('id')
      id: string,
    @Body()
      knife: UpdateKnifeDto
  ): Promise<Knife> {
    return this.knifeService.updateById(id, knife)
  }

  @Delete(':id')
  async deleteKnife(
    @Param('id')
      id: string
  ): Promise<Knife> {
    return this.knifeService.deleteById(id)
  }
}
