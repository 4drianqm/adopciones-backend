import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import CreateDogDto from './dtos/create-dogs.dto';

@Controller('dogs')
export class DogsController {

    constructor(
        private readonly dogService: DogsService
    ){}


    @Get()
    findAll(){
        const records = this.dogService.findAllDogs();
        return records;
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.dogService.findOneDog(id);
    }

    @Post()
    create_dog(@Body() body: CreateDogDto){
        return this.dogService.create_dog(body);
    }

    @Patch(':id')
    update_dog(@Param('id') id: number, @Body() body){
        return this.dogService.udpate_dog(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy_dog(@Param('id') id: number){
        return this.dogService.remove(id)
    }
    
}
