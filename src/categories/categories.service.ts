import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private catModel: Model<Category>) {}

  async getAllCat(): Promise<Category[]> {
    const catgs = await this.catModel.find().exec();
    return catgs;
  }

  async addCat(catg: Category): Promise<Category> {
    console.log(catg);
    
    const newCat = await this.catModel.create(catg);
    return newCat;
  }

async getSingleCat(id:string):Promise<Category>{
    const cat = await this.catModel.findById(id);
    return cat;
}

  async delCat(id: string): Promise<Category> {
    const deletedCat = await this.catModel.findByIdAndDelete(id).exec();
    return deletedCat;
  }
}
