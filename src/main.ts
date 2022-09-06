import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap()
  .then(() => console.log(`App is running at port ${3000}`))
  .catch(err => console.log(`Error start app ${err.message}`));
