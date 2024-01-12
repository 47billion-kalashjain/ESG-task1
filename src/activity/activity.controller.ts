import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
    constructor (private activityService:ActivityService){}

    // @Post('crt')
    // async CreateUser(@Body() user:any)
    // {
    //     return this.activityService.testReq(user);
    // }  
    
    @Post()
    async createActivity(@Body() act:any)
    {

        return this.activityService.createAct(act);
    }

    @Get()
    async getAllActivity(){
        return this.activityService.getAllAct
    }

    @Get('id')
    async getActivity(@Param('id')id:string){
        return this.activityService.getAct(id)
    }

    @Patch('id')
    async updateActivity(@Body() act:any , @Param('id')id:string ){
        return this.activityService.updateActivity(act,id);

    }
}
