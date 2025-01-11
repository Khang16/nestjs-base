import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'khang1422',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true, // Chỉ dùng cho môi trường phát triển
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
