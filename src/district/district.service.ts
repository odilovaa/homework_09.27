import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District){}


  async create(createDistrictDto: CreateDistrictDto) {
    const newDistrict = await this.districtRepo.create(createDistrictDto);
    return newDistrict;
  }


  async findAll() {
    const districts = await this.districtRepo.findAll({include: {all: true}});
    return districts;
  }


  async findOne(id: number) {
    const district = await this.districtRepo.findOne({where: {id}})
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.districtRepo.update(updateDistrictDto, {where: {id}, returning: true})
    return district[1][0];
  }

  async remove(id: number) {
    const district = await this.districtRepo.destroy({where: {id}})
    return district;
  }
}
