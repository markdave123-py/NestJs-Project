import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;
}
