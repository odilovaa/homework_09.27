import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoryRepo: typeof Category){}


  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepo.create(createCategoryDto);
    return newCategory;
  }


  async findAll() {
    const categorys = await this.categoryRepo.findAll({include: {all: true}});
    return categorys;
  }


  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({where: {id}})
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.update(updateCategoryDto, {where: {id}, returning: true})
    return category[1][0];
  }

  async remove(id: number) {
    const category = await this.categoryRepo.destroy({where: {id}})
    return category;
  }
}
