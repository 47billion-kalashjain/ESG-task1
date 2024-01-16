import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private catModel: Model<Category>
  ) { }

  async getAllCat(): Promise<Category[]> {
    const catgs = await this.catModel.find().exec();
    return catgs;
  }

  async addCat(catg: Category): Promise<Category> {
    console.log(catg);

    return await this.catModel.create(catg);
    // return newCat;
  }

  async getSingleCat(id: string): Promise<Category> {
    const cat = await this.catModel.findById(id);
    return cat;
  }

  async delCat(dId: string[]) {
    try {
      console.log("dId-=-=->", dId["dId"]);

      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];
        
      // }


      for (let i = 0; i < dId["dId"].length; i++) {
        console.log("dId-=-=->", dId["dId"][i]);

        const getDeleteStatus = await this.catModel.findByIdAndDelete(dId["dId"][i]);
        console.log("getDeleteStatus -=-=> ", getDeleteStatus);

      }
      return "Items deleted Successfully";
    } catch (error) {
      console.error("Error deleting items:", error);
      throw new Error("Failed to delete items");
    }
  }
}

