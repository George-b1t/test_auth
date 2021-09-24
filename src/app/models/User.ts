import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('users-teste')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  page_name: string;

  @Column('text')
  description: string;

  @Column('text')
  date: string;

  @Column('text')
  test_column: string;
};

export default User;
