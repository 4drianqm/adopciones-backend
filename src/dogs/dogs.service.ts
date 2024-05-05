import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dogs from './entities/dogs.entity';
import { Repository } from 'typeorm';
import CreateDogDto from './dtos/create-dogs.dto';
import UpdateDogDto from './dtos/update-dogs.dto';

@Injectable()
export class DogsService {
   constructor(
    @InjectRepository(Dogs)
    private readonly dogsRepository: Repository<Dogs>
   ){}

   findAllDogs(){
    return this.dogsRepository.find();
   }


   async findOneDog(id: number){
    const record = await this.dogsRepository.findOne({
        where: {id},
    })

    if (record == null){
        throw new NotFoundException(`user #${id} not found`)
    }

    return record;
   }

   create_dog(new_dog: CreateDogDto){
    const dog = this.dogsRepository.create(new_dog);

    return this.dogsRepository.save(dog);
   }

   async udpate_dog(id: number, update_dog: UpdateDogDto){
    const dog =  await this.findOneDog(id);
    this.dogsRepository.merge(dog, update_dog)

    return this.dogsRepository.save(dog)
   }

   async remove(id: number){
    const dog = await this.findOneDog(id);

    return this.dogsRepository.remove(dog);
   }
}
