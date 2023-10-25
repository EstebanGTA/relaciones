/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EquipoEntity } from "./equipoTrabajo.entity";

@Entity('empresa', { schema: 'company' })

export class EmpresaEntity {

    @PrimaryGeneratedColumn('uuid')
    id_empresa: string;

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
        name: 'nombre_empresa',
        nullable: true,
        comment: 'nombre de la empresa'
    })
    name_empresa: string;

    @Column('varchar', {
        name: 'informacion_empresa',
        nullable: true,
        comment: 'Informacion de la empresa'
    })
    informacion_empresa: string;

    @Column('varchar', {
        name: 'vision',
        nullable: true,
        comment: 'Vision de la empresa'
    })
    vision: string;

    @OneToOne(() => EquipoEntity, equipo => equipo.empresa)
    @JoinColumn()
    equipo: EquipoEntity;

}