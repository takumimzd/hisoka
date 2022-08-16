import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  image_src: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  recommend_level: number;

  @Column()
  user_id: string;
  // @ManyToOne(() => User, {
  //   eager: false,
  // })
  // @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  // user_id?: User;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
