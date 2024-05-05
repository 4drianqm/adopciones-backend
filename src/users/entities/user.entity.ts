import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Role from "./role.entity";
import Dogs from "src/dogs/entities/dogs.entity";
import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';

/* Se crea un entidad para la base de datos */

@Entity('users')
class User{
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

 
  @Column({type: 'varchar', length: 255})
  @ApiProperty({
    description: 'nombre del usuario',
    example: 'Adrian'
  })
  name: string;

  @ApiProperty()
  @Column({type: 'varchar', length: 255, default: ''})
  lastname: string;

  @ApiProperty()
  @Column({type: 'varchar'})
  email: string;

  @ApiProperty()
  @Column({type: 'varchar', nullable: true})
  addres?: string;

  @ManyToOne(()=>Role, (role)=>role.users)
  role: Role;
  
  @OneToMany(()=> Dogs, (dog)=> dog.name)
  dog: Dogs;

  @Column({type: 'varchar', default: ''})
  password: string;
  

  @BeforeInsert()
  async hashPassword(){
    const saltOrRound = 10;
    const hash = await bcrypt.hash(this.password, saltOrRound);

    this.password = hash;
  }
}



export default User;