import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EmFactorService } from './em-factor.service';
import { createEmfdto } from 'src/dto/emFactor/create-emF.dto';
import { promises } from 'dns';
import { emFactor } from 'src/schema/emfactor.schema';
import { updateEmfdto } from 'src/dto/emFactor/update-emF.dto';

@Controller('emfactor')
export class EmFactorController {
    constructor(private emFService:EmFactorService){}
    
    @Get()
    async getAllEmf(){
        return this.emFService.getAllEmf()
    }

    @Get()
    async getEmf(@Param('id')id:string){
        return this.emFService.getEmf(id);
    }

    @Post()
    async createEmf(@Body()obj:createEmfdto){
        console.log(obj);
        return this.emFService.createEmf(obj);
    }

    @Patch()
    async updateEmf(@Body()obj:updateEmfdto){
        // console.log(obj);
        
        return this.emFService.updateEmf(obj);
    }
    
    
}
