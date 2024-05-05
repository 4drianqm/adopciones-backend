import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

@Entity('roles') /* Nombre de la tabla */
class Role {
    @PrimaryGeneratedColumn('uuid') /* Hash id */
    id: string;

    @Column({type: 'varchar', length: 255})
    name: string;

    
    @OneToMany(()=> User, (user)=> user.role) /* (con que entidad va a trabajar, en donde lo va a guardar) */
    users: User[] 
}


export default Role;