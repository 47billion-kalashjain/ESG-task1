import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';

import { Category } from 'src/schema/category.schema';
import { Createcatdto } from 'src/dto/category/create-cat.dto';

@Controller('categories')
export class CategoriesController {
    constructor (private catService:CategoriesService){}

    @Get()
    async GetCategories():Promise<Category[]>{
        return this.catService.getAllCat();
    }

    @Post()
    async Postcategories(@Body() cat:Createcatdto):Promise<Category>{
        console.log(cat);
        
       return this.catService.addCat(cat);

    }

    @Get(':id')
    async getCategory(@Param('id')id:string){
        return this.catService.getSingleCat(id);
    }

    @Delete()
    async Deletecategories(@Body()dId:string[]){
        return this.catService.delCat(dId);
    }

    


}
