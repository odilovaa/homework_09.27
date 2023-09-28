import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region){}


  async create(createRegionDto: CreateRegionDto) {
    const newRegion = await this.regionRepo.create(createRegionDto);
    return newRegion;
  }


  async findAll() {
    const regions = await this.regionRepo.findAll({include: {all: true}});
    return regions;
  }


  async findOne(id: number) {
    const region = await this.regionRepo.findOne({where: {id}})
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionRepo.update(updateRegionDto, {where: {id}, returning: true})
    return region[1][0];
  }

  async remove(id: number) {
    const region = await this.regionRepo.destroy({where: {id}})
    return region;
  }

}
