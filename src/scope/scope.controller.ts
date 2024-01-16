import { Controller, Get } from '@nestjs/common';
import { ScopeService } from './scope.service';
import { scope } from 'src/schema/scope.schema';

@Controller('scope')
export class ScopeController {
    constructor(private scopeService: ScopeService) { }
    @Get()
    getAll(): Promise<scope[]> {

        return this.scopeService.getScope();
    }
    getParticularScope(scopeNum: number): Promise<scope> {
        return this.scopeService.getParticularScope(scopeNum)
    }

}
