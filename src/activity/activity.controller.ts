import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { createactivitdto } from 'src/dto/activity/create-act.dto';
import { updateActivitydto } from 'src/dto/activity/update-act.dto';

@Controller('activity')
export class ActivityController {
    constructor (private activityService:ActivityService){}

    // @Post('crt')
    // async CreateUser(@Body() user:any)
    // {
    //     return this.activityService.testReq(user);
    // }  
    
    @Post()
    async createActivity(@Body() act:createactivitdto)
    {

        return this.activityService.createAct(act);
    }

    @Get()
    async getAllActivity(){
        return this.activityService.getAllAct()
    }

    @Get('id')
    async getActivity(@Param('id')id:string){
        return this.activityService.getAct(id)
    }

    @Patch()
    async updateActivity(@Body () act:updateActivitydto ){
        return this.activityService.updateAct(act);

    }
}
