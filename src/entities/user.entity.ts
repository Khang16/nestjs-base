import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users') // Ánh xạ entity này với bảng 'users' trong cơ sở dữ liệu
export class User {
  @PrimaryGeneratedColumn() // Cột 'id' là khóa chính và tự động tăng
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
