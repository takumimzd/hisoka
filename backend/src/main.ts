import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enableCorsを使って別のドメインからのリクエストを可能にする。
  // 本番でのデプロイの際はoriginを*ではなく正しく指定する必要がありそう。
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });
  await app.listen(5000);
}
bootstrap();
