/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmpresaEntity } from "./empresa.entity";

@Entity('equipo', { schema: 'company' })

export class EquipoEntity {

    @PrimaryGeneratedColumn('uuid')
    id_equipo: string;

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
        name: 'nombre_equipo',
        nullable: false,
        comment: 'nombre del Equipo de la empresa'
    })
    nombre_equipo: string;

    @Column('varchar', {
        name: 'descripcion_equipo',
        nullable: true,
        comment: 'Descripcion del equipo'
    })
    descripcion: string;

    @OneToOne(() => EmpresaEntity, empresa => empresa.equipo)
    empresa: EmpresaEntity;

}