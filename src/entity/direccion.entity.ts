/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('direccion', { schema: 'user' })

export class DireccionEntity {

    @PrimaryGeneratedColumn('uuid')
    id_direccion: string;

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
        name: 'calle_primaria',
        nullable: true,
        comment: 'calle principal en la que vive el usuario'
    })
    calle_uno: string;

    @Column('varchar', {
        name: 'calle_secundaria',
        nullable: true,
        comment: 'calle secundaria en la que vive el usuario'
    })
    calle_dos: string;

    @Column('varchar', {
        name: 'numero_casa',
        nullable: true,
        comment: 'Número de la casa en la que recide el usuario'
    })
    numero_casa: string;

    @ManyToOne(() => UserEntity, {nullable: false})
    @JoinColumn({name: 'id_usuario'})
    id_usuario: UserEntity;

}