/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DireccionEntity } from "./direccion.entity";
import { RolEntity } from "./rol.entity";

@Entity('usuario', { schema: 'user' })

export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

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
        name: 'nombre_usuario',
        nullable: false,
        comment: 'Dos nombres del usuario'
    })
    name: string;

    @Column('varchar', {
        name: 'apellido_usuario',
        nullable: true,
        comment: 'Dos apellidos del usuario'
    })
    apellido: string;

    @Column('date', {
        name: 'fecha_nacimiento',
        nullable: true,
        comment: 'fecha de nacimiento del usuario'
    })
    fecha_nacimiento: Date;

    @OneToMany(() => DireccionEntity, direccion => direccion.id_usuario)
    direccion: DireccionEntity[];


    @ManyToMany(() => RolEntity, rol => rol.id_rol)
    @JoinTable({
        name: "user_roles",
        joinColumn: {name:"usuario_id"},
        inverseJoinColumn:{name:"rol_id"}
    })
    rolId: RolEntity[];
}