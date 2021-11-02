import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Produtos{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    titulo: string;

    @Column()
    ds_tipoProd: string;

    @Column("decimal", {precision: 5, scale: 2})
    vlrCompra: number;

    @Column()
    qtddProduto: number;

    @Column("decimal", {precision: 5, scale: 2})
    vlrVenda: number;

    @Column()
    dtVencimento: Date

    @Column({
        default: false
    })
    vendido: boolean;

    @CreateDateColumn()
    dtEntrada: Date;

    @UpdateDateColumn()
    dtSaida: Date;
}