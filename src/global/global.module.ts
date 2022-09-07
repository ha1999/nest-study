import { Module, Global } from '@nestjs/common';
import {CommonModule} from './common/common.module';
import { ConfigModule } from './config/config.module';

@Global()
@Module({
  imports: [CommonModule, ConfigModule],
  exports: [CommonModule, ConfigModule]
})
export class GlobalModule {}
