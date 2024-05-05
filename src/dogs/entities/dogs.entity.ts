import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import GenderStatus from "../dogs-enum";
import User from "src/users/entities/user.entity";

@Entity('dogs')
class Dogs{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 255})
    breed: string;

    @Column({type: 'varchar', length: 255})
    age:  string;

    @Column({type: 'enum', enum: GenderStatus })
    gender: GenderStatus;

    
    @ManyToOne(()=> User, (user)=> user.name)
    user: User;
}


export default Dogs;