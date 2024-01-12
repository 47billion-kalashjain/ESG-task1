import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Createcatdto } from 'src/dto/create-cat.dto';
import { Category } from 'src/schema/category.schema';

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
    async Deletecategories(@Param('id')id:string):Promise<Category>{
        return this.catService.delCat(id);
    }

    


}
