import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id_: string;

  @Column()
  score: number;
}
