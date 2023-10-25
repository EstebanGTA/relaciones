/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('rol', { schema: 'user' })

export class RolEntity {

    @PrimaryGeneratedColumn('uuid')
    id_rol: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    CreateAt: Date;

    @UpdateDateColumn({
        name: 'update_At',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    UpdateDateColumn: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @Column('varchar', {
        name: 'nombre_rol',
        nullable: false,
        comment: 'Nombre del rol que ocupa el usuario'
    })
    name_rol: string;

    @Column('varchar', {
        name: 'descripcion_rol',
        nullable: true,
        comment: 'Descripcion del Rol'
    })
    descripcion: string;


    @OneToMany(() => UserEntity, user => user.rolId)
    rolId: UserEntity[]; 

}