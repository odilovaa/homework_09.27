import { Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort){}


  async create(createComfortDto: CreateComfortDto) {
    const newComfort = await this.comfortRepo.create(createComfortDto);
    return newComfort;
  }


  async findAll() {
    const comforts = await this.comfortRepo.findAll();
    return comforts;
  }


  async findOne(id: number) {
    const comfort = await this.comfortRepo.findOne({where: {id}})
    return comfort;
  }

  async update(id: number, updateComfortDto: UpdateComfortDto) {
    const comfort = await this.comfortRepo.update(updateComfortDto, {where: {id}, returning: true})
    return comfort[1][0];
  }

  async remove(id: number) {
    const comfort = await this.comfortRepo.destroy({where: {id}})
    return comfort;
  }
}
