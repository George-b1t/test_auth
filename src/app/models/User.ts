import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users-teste')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  username: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  };
};

export default User;
